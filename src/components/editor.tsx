"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TextAreaAutoSize from "react-textarea-autosize";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import EditorLink from "@editorjs/link";
import { Post } from "@prisma/client";
import { Pick } from "@prisma/client/runtime/library";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postPatchSchema, postPatchSchemaType } from "@/lib/post";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface EditorProps {
  post: Pick<Post, "id" | "title" | "content" | "publish">;
}

export default function Editor({ post }: EditorProps) {
  const [isMounted, setIsmounted] = useState(false);
  const ref = useRef<EditorJS>();
  const { toast } = useToast();
  const router = useRouter();

  const initializeEditor = useCallback(async () => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "ここに記事を書く",
      inlineToolbar: true,
      onReady() {
        ref.current = editor;
      },
      data: post.content as any,
      tools: {
        header: Header,
        link: EditorLink,
      },
    });
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsmounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initializeEditor();
    }
    return () => {
      ref.current?.destroy();
      ref.current = undefined;
    };
  }, [isMounted, initializeEditor]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postPatchSchemaType>({
    resolver: zodResolver(postPatchSchema),
  });

  const onSubmit = async (data: postPatchSchemaType) => {
    const blocks = await ref.current?.save();
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        content: blocks,
      }),
    });

    if (!response.ok) {
      return toast({
        title: "問題が発生しました",
        description: "あなたの記事は保存されませんでした",
        variant: "destructive",
      });
    } else {
      toast({
        title: "更新が成功しました",
        description: "正常に更新されました",
      });

      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center spacex-10">
            <Link
              href={"/dashboard"}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              戻る
            </Link>
            <p className="text-muted-foreground text-sm ">公開</p>
          </div>
          <button className={cn(buttonVariants())} type="submit">
            <span>保存</span>
          </button>
        </div>
        <div className="w-[800px] mx-auto">
          <TextAreaAutoSize
            defaultValue={post.title}
            id="title"
            autoFocus
            placeholder="Post title "
            className="w-full resize-none overflow-hidden bg-transparent text-5xl focus:outline-none font-bold"
            {...register("title")}
          ></TextAreaAutoSize>
        </div>
      </div>
      <div id="editor" className="min-h-[500px]"></div>
      <p className="text-sm text-gray-500">
        Use<kbd>Tab</kbd>
        to open the command menu
      </p>
    </form>
  );
}
