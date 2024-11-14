import type { SidebarNavItem } from "types";
import Link from "next/link";
import Icons from "@/components/icon";

interface DashBoradNavProps {
  items: SidebarNavItem[];
}

export default function DushBoradNav({ items }: DashBoradNavProps) {
  return (
    <nav>
      {items.map((item, index) => {
        if (!item.icon) {
          return null;
        }
        const Icon = Icons[item.icon] || Icons.github;

        console.log(item.icon);

        // こで定義しているアイコン、 src/components/icon.tsx のアイコンを指定してるのでデフォルトもそこで指定する必要がある
        return (
          <Link href={item.href ?? "#"} key={index}>
            <Icon />
            <span
              className={
                "flex items-center rounded-md py-2 px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              }
            >
              {item.title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
