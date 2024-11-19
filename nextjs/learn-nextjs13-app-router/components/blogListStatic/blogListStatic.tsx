import type { Database } from "@/database.types";
import Link from "next/link";

type Blog = Database["public"]["Tables"]["blogs"]["Row"];

const fetchBlog = async () => {
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string
    }),
    cache: "force-cache"
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data from serer");
  }
  const blog: Blog[] = await res.json();
  return blog;
};


const BlogListStatic = async () => {
  const blogs = await fetchBlog();
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => {
          return (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`} prefetch={false}>{blog.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { BlogListStatic };