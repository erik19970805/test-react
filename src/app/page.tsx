import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-content-center gap-2 h-full">
      <Link
        href="/tasks"
        className="bg-blue-600 rounded-md px-4 py-2 text-white"
      >
        Tasks
      </Link>
      <Link
        href="/list"
        className="bg-blue-600 rounded-md px-4 py-2 text-white"
      >
        List
      </Link>
    </main>
  );
}
