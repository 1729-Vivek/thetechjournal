import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <Link href="/" className="text-2xl font-bold text-blue-600">
          TheTechJournal
        </Link>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <Link href="/ai">AI</Link>
          <Link href="/trading">Trading</Link>
          <Link href="/programming">Programming</Link>
          <Link href="/tools">Tools</Link>

        </div>

      </div>

    </nav>
  );
}
