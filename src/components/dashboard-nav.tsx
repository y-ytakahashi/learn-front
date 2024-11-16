"use client";
import type { SidebarNavItem } from "types";
import Link from "next/link";
import Icons from "@/components/icon";
import { usePathname } from "next/navigation";

interface DashBoradNavProps {
  items: SidebarNavItem[];
}

export default function DushBoradNav({ items }: DashBoradNavProps) {
  const path = usePathname();
  return (
    <nav className="px-2">
      {items.map((item, index) => {
        if (!item.icon) {
          return null;
        }
        const Icon = Icons[item.icon] || Icons.github;

        // こで定義しているアイコン、 src/components/icon.tsx のアイコン指定してるのでデフォルトもそこで指定する必要がある
        return (
          <Link
            className="flex items-baseline"
            href={item.href ?? "/"}
            key={index}
          >
            <span
              className={`flex items-center rounded-md py-2 px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${path === item.href ? "bg-accent" : "bg-transparent"}`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
