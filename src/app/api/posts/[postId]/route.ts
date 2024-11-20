import { auth } from "@/auth";
import { db } from "@/lib/db";
import { postPatchSchema } from "@/lib/post";
import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";

const routeContextSchema = z.object({
  params: z.object({
    postId: z.string(),
  }),
});

export async function PATCH(
  req: NextRequest,
  context: z.infer<typeof routeContextSchema>,
) {
  try {
    const { params } = routeContextSchema.parse(context);

    if (!(await verifiCurrentUserHasAccessPost(params.postId))) {
      return NextResponse.json(null, { status: 403 });
    }

    const json = await req.json();
    const body = postPatchSchema.parse(json);

    await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(err.issues, { status: 422 });
    } else {
      return NextResponse.json(null, { status: 500 });
    }
  }

  return NextResponse.json(null, { status: 200 });
}

async function verifiCurrentUserHasAccessPost(postId: string) {
  const session = await auth();
  const count = await db.post.count({
    where: {
      id: postId,
      authorId: session?.user?.id,
    },
  });
  return count > 0;
}
