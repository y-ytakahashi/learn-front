"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { ButtonProps, buttonVariants } from "./ui/button";
import icons from "./icon";
import { useRouter } from "next/navigation";
import { Toast } from "./ui/toast";
import { useToast } from "@/hooks/use-toast";

interface PostCreateButtonProps extends ButtonProps {}

export default function PostCreateButton({
  className,
  variant,
  ...props
}: PostCreateButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const onClick = async () => {
    setIsLoading(true);
    const res = await fetch("api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "applicaton/json",
      },
      body: JSON.stringify({
        title: "untitle post",
      }),
    });

    setIsLoading(false);

    if (!res.ok) {
      return toast({
        title: "問題が発生しました",
        description: "投稿が作成されませんでした。もう1度お試しください",
        variant: "destructive",
      });
    }

    const post = await res.json();
    router.refresh();
    router.push(`editor/${post.id}`);
  };

  return (
    <button
      className={cn(buttonVariants({ variant }), {
        "cursor-not-allowed opacity-60": isLoading,
      })}
      onClick={onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <icons.spinner2 className="animate-spin mr-2 h-4 w-4" />
      ) : (
        <icons.add className="mr-2 h-4 w-4" />
      )}
      新しい投稿
    </button>
  );
}
