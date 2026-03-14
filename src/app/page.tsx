import Navbar from "@/components/Navbar";

export default function Home(){
  return (
    <div>
      <Navbar />
      <main className="p-10">
        <h1 className="text-4xl font-bold">
          Welcome to TheTechJournal
        </h1>
        <p className="mt-4 text-gray-600">
          Tech news , AI tools , trading platforms and prgrammng resources.
        </p>
      </main>
    </div>
  );
}