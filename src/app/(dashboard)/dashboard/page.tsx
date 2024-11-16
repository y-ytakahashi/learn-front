import DashBoardShell from "@/components/dashboard-shell";
import DashBoardHeader from "@/components/dashbord-header";
import PostCreateButton from "@/components/post-create-button";
import PostItem from "@/components/post-items";
import PostOperations from "@/components/post-operations";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashBoradPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  const posts = await db.post.findMany({
    where: {
      authorId: user?.id,
    },
    select: {
      id: true,
      title: true,
      publish: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <DashBoardShell>
      <DashBoardHeader heading="記事投稿" text="記事の投稿と管理">
        <PostCreateButton />
      </DashBoardHeader>
      <div>
        <div className="divide-y rounded-md border">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </DashBoardShell>
  );
}
