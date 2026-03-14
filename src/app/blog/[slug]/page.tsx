import { posts } from "@/lib/posts";

export default function BlogPost({params}: any){
    const post = posts.find(p=>p.slug===params.slug);

    if(!post) return <h1>Post not found</h1>
    return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{post.title}</h1>

      <p className="mt-6 text-gray-700">
        {post.content}
      </p>
    </div>
  );
}