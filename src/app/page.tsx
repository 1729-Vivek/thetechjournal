import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}

        </div>

      </section>

    </div>
  );
}
