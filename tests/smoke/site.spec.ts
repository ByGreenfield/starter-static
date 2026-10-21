import { expect, test } from '@playwright/test';
import site from '../../content/site.json';

test('home loads', async ({ page }) => {
  const res = await page.goto('/');
  expect(res?.status()).toBe(200);
  await expect(page).toHaveTitle(new RegExp(site.name));
  await expect(page.getByRole('heading', { level: 1 })).toContainText(site.name);
});

test('nav links resolve', async ({ page }) => {
  await page.goto('/');
  for (const item of site.nav) {
    const res = await page.goto(item.href);
    expect(res?.status(), `${item.href} should return 200`).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
});

test('contact form submits', async ({ page }) => {
  await page.route(site.contact.formEndpoint, (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
  );
  await page.goto('/contact/');
  await page.getByLabel('Name').fill('Test Person');
  await page.getByLabel('Email').fill('test@example.test');
  await page.getByLabel('Message').fill('Hello from the smoke suite.');
  await page.getByRole('button', { name: 'Send message' }).click();
  await expect(page.getByRole('status')).toContainText(site.contact.successMessage);
});
