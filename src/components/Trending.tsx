import Link from "next/link";

export default function Trending({ posts }: any) {

  return (
    <div>

      <h3 className="text-xl font-bold mb-6">
        Trending
      </h3>

      <div className="space-y-4">

        {posts.map((post: any) => (

          <Link key={post.slug} href={`/blog/${post.slug}`}>

            <div className="border-b pb-3">

              <h4 className="font-semibold hover:text-blue-600">
                {post.title}
              </h4>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}
