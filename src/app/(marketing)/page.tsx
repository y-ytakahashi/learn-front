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

          <div className="flex items-center py-4 gap-4">
            <Link href={"#"} className={cn(buttonVariants({ size: "lg" }))}>
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

      <section
        id="features"
        className="container py-8 md:py-12 lg:py-24  bg-slate-50 space-y-6 md:grid-cols-3"
      >
        <div className="text-center space-y-6  mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンな技術スタックを使って作られたアプリケーションです
          </p>
        </div>

        <div className="grid-cols-3 sm:grid-cols-2 mx-w-[58rem] w-full flex ">
          <div className="bg-background border sm:grid-cols-2 gap-6 mx-auto max-w-[10rem]">
            <div className="bg-background">
              <div className="flex flex-col justify-between p-6 h-[160px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                  />
                </svg>
                <div className="">
                  <h3>Next.js </h3>
                  <p>AppRouter/Laoutの技術を使用</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border gap-6 mx-auto max-w-[10rem]">
            <div className="bg-background">
              <div className="flex flex-col justify-between p-6 h-[160px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                  />
                </svg>
                <div className="">
                  <h3>Next.js </h3>
                  <p>AppRouter/Laoutの技術を使用</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border gap-6 mx-auto max-w-[10rem]">
            <div className="bg-background">
              <div className="flex flex-col justify-between p-6 h-[160px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                  />
                </svg>
                <div className="">
                  <h3>Next.js </h3>
                  <p>AppRouter/Laoutの技術を使用</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-foreground sm:text-lg sm:leading-7 text-center">
            post writer はログインするとブログ投稿できるようになります。
          </p>
        </div>
      </section>
      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="max-w-[58] max-auto text-center md:text-6xl">
          <h2 className="font-extrabold text-3xl md:text-6xl">Contact</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            お仕事のご連絡をお待ちしております
          </p>
        </div>
      </section>
    </>
  );
}
