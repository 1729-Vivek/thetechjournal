import Navbar from "@/components/Navbar";
import { posts } from "@/lib/posts";

export default function BlogPost({ params }: any) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) return <h1>Post not found</h1>;

  return (
    <div>

      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-6">
          {post.title}
        </h1>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>

      </article>

    </div>
  );
}
