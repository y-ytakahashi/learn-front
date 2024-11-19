import Link from "next/link";
import { siteConfifg } from "../../config/site";

export default function SiteFooter() {
  return (
    <footer>
      <div className="container py-10 md:py-0 md:h-24">
        <p className="text-center text-sm md:text-left">
          Build by
          <Link
            href={siteConfifg.links.x}
            className="underline underline-offset-4 font-medium"
            target="_blank"
            rel="noreferrer"
          >
            hoge
          </Link>
          <Link
            href={"https://vercel.com"}
            className="underline underline-offset-4 font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
}
