import { allPosts } from "contentlayer/generated";

export default function BlogPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold">Blogs</h1>
          <p>content layer で作成しています</p>
        </div>
      </div>
    </div>
  );
}
