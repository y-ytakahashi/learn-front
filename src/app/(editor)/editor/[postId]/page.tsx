import Editor from "@/components/editor";
import React from "react";
import { Post, User } from "@prisma/client";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { notFound, redirect } from "next/navigation";

interface EditorPageProps {
  params: {
    postId: string;
  };
}

async function getPostForUser(postId: Post["id"], userId: User["id"]) {
  const post = await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });
  return post;
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser();

  const userId = user?.id ?? redirect("/login");
  const postId = params.postId;
  const post = await getPostForUser(postId, userId);

  if (!post) {
    return notFound();
  }

  return (
    <Editor
      post={{
        id: post?.id,
        title: post?.title,
        content: post?.content,
        publish: post?.publish,
      }}
    />
  );
}
