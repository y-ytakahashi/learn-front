import React from "react";
import { Post } from "@prisma/client";
import Link from "next/link";
import { format } from "date-fns";
import PostOperations from "./post-operations";

interface PostItemProps {
  post: Pick<Post, "id" | "title" | "publish" | "createdAt">;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          className="font-semibold hover:underline"
          href={`/post/${post.id}`}
        >
          {post.title}
        </Link>
        <p className="text-sm text-muted-foreground">
          {format(post.createdAt, "yyyy-MM-dd")}
        </p>
      </div>
      <PostOperations post={post} />
    </div>
  );
}
