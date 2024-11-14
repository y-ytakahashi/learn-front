import { buttonVariants } from "@/components/ui/button";
import UserAuthForm from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Register() {
  return (
    <div className="container grid flex-col lg:grid-cols-2 w-screen h-screen items-center justify-center lg:max-w-none lg:px-0">
      <Link
        href={"/login"}
        className={
          (cn(buttonVariants({ variant: "outline" })),
          "absolute left-4 md:left-8 md:top-8")
        }
      >
        ログイン
      </Link>
      <div className="h-full bg-muted lg:block hidden"></div>

      <div className="flex flex-col justify-center items-center">
        <div className="items-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            アカウントの作成
          </h1>
          <p>メールアドレスを入力してアカウントを作成してください</p>
        </div>

        <UserAuthForm />

        <p className="text-muted-foreground px-8 text-center text-sm">
          続けてクリックすれば私たちの
          <Link href={"/terms"} className="underline text-foreground">
            利用規約
          </Link>
          と
          <Link href={"/privacy"} className="underline text-foreground">
            プライバシーポリシー
          </Link>
          に同意したことになります
        </p>
      </div>
    </div>
  );
}
