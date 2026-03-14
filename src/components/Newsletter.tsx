export default function Newsletter() {

  return (
    <section className="bg-blue-600 text-white py-16 mt-16">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with Tech Trends
        </h2>

        <p className="mb-6">
          Get AI tools, trading insights and developer resources weekly.
        </p>

        <div className="flex justify-center">

          <input
            className="p-3 rounded-l-lg text-black"
            placeholder="Enter your email"
          />

          <button className="bg-black px-6 rounded-r-lg">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}
