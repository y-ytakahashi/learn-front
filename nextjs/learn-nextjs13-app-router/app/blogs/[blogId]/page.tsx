import { Database } from "@/database.types";
import { Headers } from "next/dist/compiled/@edge-runtime/primitives";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import styles from "./page.module.scss";

type Blog = Database["public"]["Tables"]["blogs"]["Row"]

type PageProps = {
  params: {
    blogId: string
  }
}

const fetchBlog = async (blogId: string) => {
  const res = await fetch(`${process.env.url}/rest/v1/blogs?id=eq.${blogId}&select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string
    }),
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  const blogs: Blog[] = await res.json();
  return blogs[0];
};

const BlogDetailPage = async ({ params }: PageProps) => {
  const blog = await fetchBlog(params.blogId);
  const { id, title, content, created_at } = blog;
  return (
    <div className={styles.container}>
      <p>
        <strong>Task ID:</strong>{id}
      </p>
      <p>
        <strong>Task Title:</strong>{title}
      </p>
      <p>
        <strong>Content:</strong>{content}
      </p>
      <p>
        <strong>Created at:</strong>
        {blog && format(new Date(created_at), "yyyy-MM-dd HH:mm:ss")}
      </p>
      <Link href={"/blogs"} prefetch={false}>
        <ArrowUturnLeftIcon className={styles.icon} />
      </Link>
    </div>
  );
};

export default BlogDetailPage;











