import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold text-blue-400">
          TheTechJournal
        </h1>

        <div className="flex gap-6 text-gray-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/ai" className="hover:text-white">AI</Link>
          <Link href="/trading" className="hover:text-white">Trading</Link>
          <Link href="/programming" className="hover:text-white">Programming</Link>
        </div>

      </div>
    </nav>
  );
}
