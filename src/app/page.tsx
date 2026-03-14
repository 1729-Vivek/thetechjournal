import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import FeaturedPost from "@/components/FeaturedPost";
import Trending from "@/components/Trending";
import Newsletter from "@/components/Newsletter";
import { posts } from "@/lib/posts";

export default function Home() {

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">

        <FeaturedPost post={featured} />

        <div className="grid md:grid-cols-4 gap-10 mt-16">

          <div className="md:col-span-3 grid md:grid-cols-2 gap-8">

            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}

          </div>

          <Trending posts={posts} />

        </div>

      </main>

      <Newsletter />

    </div>
  );
}
