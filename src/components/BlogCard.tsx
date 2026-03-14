import Link from "next/link";

export default function BlogCard({ post }: any) {
  return (
    <Link href={`/blog/${post.slug}`}>

      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">

        <div className="h-40 bg-gray-200"></div>

        <div className="p-5">

          <h2 className="text-xl font-bold mb-2">
            {post.title}
          </h2>

          <p className="text-gray-600 text-sm">
            {post.description}
          </p>

          <div className="mt-4 text-blue-500 font-semibold">
            Read More →
          </div>

        </div>

      </div>

    </Link>
  );
}
