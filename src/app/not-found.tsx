import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="grid gap-4">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-neutral-700">That page does not exist. It may have moved.</p>
      <Link href="/" className="text-accent underline">
        Back to the home page
      </Link>
    </div>
  );
}
