import { allPosts } from "contentlayer/generated";
import { format } from "date-fns";
import Link from "next/link";

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
      <div className="grid gap-10">
        {allPosts.map((post) => (
          <article key={post._id} className="relative flex flex-col space-y-2">
            <h2 className="text-2xl font-extrabold">{post.title}</h2>
            <p className="text-sm text-muted-foreground">
              {format(post.date, "yyyy-MM-dd")}
            </p>
            <Link href={post.url} className="absolute inset-0 py-12">
              もっとみる
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
