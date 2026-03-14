import Link from "next/link";

export default function FeaturedPost({ post }: any) {

  return (
    <Link href={`/blog/${post.slug}`}>

      <div className="relative rounded-xl overflow-hidden h-[420px]">

        <div className="absolute inset-0 bg-gray-800"></div>

        <div className="absolute bottom-0 p-8 text-white">

          <h1 className="text-3xl font-bold mb-3">
            {post.title}
          </h1>

          <p className="text-gray-200">
            {post.description}
          </p>

        </div>

      </div>

    </Link>
  );
}
