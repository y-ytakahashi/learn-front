import Link from "next/link";
import { siteConfifg } from "../../config/site";
import { MarketingCongig } from "../../types";

interface MobileNavProps {
  items: MarketingCongig;
}
export default function MobileNav({ items }: MobileNavProps) {
  return (
    <div className="fixed inset-0 top-16 z-50 p-6 shadow-md md:hidden animate-in slide-in-from-bottom-80">
      <div className="grid gap-6 bg-popover p-4 text-popover-foreground shadow-md">
        <Link href={"/"}>{siteConfifg.name}</Link>
        <nav className="flex text-sm gap-4">
          {items.navitems.map((items, index) => (
            <Link
              key={index}
              href={items.href}
              className="p-2 font-medium hover:underline"
            >
              {items.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
