import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 ">
        <div className="container text-center flex flex-col items-center gap-4 max-w[64rem]">
          <Link
            href={"#"}
            className="bg-muted px-4 py-1.5 rounded-2xl text-md font-medium"
          >
            xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p>このアプリケーションはnextjsで作成されています</p>

          <div>
            <Link
              href="{/login}"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              始める
            </Link>
            <Link
              href={"#"}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreffer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
