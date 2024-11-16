import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const PostCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    console.log(session);

    if (!session) {
      return NextResponse.json("Unauthrized", { status: 403 });
    }

    const json = await req.json();

    // zodの型定義のバリデーション
    const body = PostCreateSchema.parse(json);

    const post = await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: session.user?.id ?? "",
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json(post);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(err.issues, { status: 422 });
    }

    return NextResponse.json(null, { status: 500 });
  }
}
