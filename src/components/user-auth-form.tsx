"use client";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { buttonVariants } from "./ui/button";
import Icons from "./icon";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function UserAuthForm() {
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <button className={cn(buttonVariants())}>
            メールアドレスでログイン
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground px-2 bg-background"></span>
        </div>
      </div>
      <button
        onClick={async () => {
          setIsGithubLoading(true);
          await signIn("github");
        }}
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        {isGithubLoading ? (
          <Icons.spinner2 size="40" className="animate-spin" />
        ) : (
          <Icons.github size="40" />
        )}
        Github
      </button>
    </div>
  );
}
