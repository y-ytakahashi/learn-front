"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TextAreaAutoSize from "react-textarea-autosize";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import EditorLink from "@editorjs/link";

export default function Editor() {
  const [isMounted, setIsmounted] = useState(false);
  const ref = useRef<EditorJS>();

  const initializeEditor = useCallback(async () => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "ここに記事を書く",
      inlineToolbar: true,
      onReady() {
        ref.current = editor;
      },
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

  return (
    <form>
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
            id="title"
            autoFocus
            placeholder="Post title "
            className="w-full resize-none overflow-hidden bg-transparent text-5xl focus:outline-none font-bold"
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
