import { allPosts } from "contentlayer/generated";

export default function BlogPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
            Blogs
          </h1>
          <p>content layer で作成しています</p>
        </div>
      </div>
      <hr className="my-8" />
      {allPosts.map((post) => (
        <article key={post._id}>
          <h2 className="text-2xl font-extrabold">{post.title}</h2>
          <p>{post.body.raw}</p>
        </article>
      ))}
    </div>
  );
}
