import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flext justify-between p-4 bg-black text-white">
            <h1 className="text-xl font-bold">TheTechJournal</h1>

            <div className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/ai">AI</Link>
                <Link href="/trading">Trading</Link>
                <Link href="/programming">Programming</Link>

            </div>
        </nav>
    );
}