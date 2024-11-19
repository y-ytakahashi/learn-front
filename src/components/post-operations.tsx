import { Post } from "@prisma/client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Icons from "@/components/icon";
import Link from "next/link";

interface PostOperationsProps {
  post: Pick<Post, "id" | "title">;
}

export default function PostOperations({ post }: PostOperationsProps) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Icons.dropdown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link className="w-full" href={`/editor/${post.id}`}>
              編集
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive cursor-pointer focus:text-destructive">
            削除
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
