import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

async function getPostFormSlug(slug: string) {
  const post = await allPosts.find((post) => post.url === slug);
  const url = post?.url;
  console.log(url);

  return post;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post = await getPostFormSlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div>{post.title}</div>
    </div>
  );
}
