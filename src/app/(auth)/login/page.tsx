import UserAuthForm from "@/components/user-auth-form";
import Link from "next/link";

export default function Logni() {
  return (
    <div className="container flex flex-col justify-center h-screen items-center w-screen">
      <div className="items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p>メールアドレスを入力してログインできます</p>
        </div>

        <UserAuthForm />

        <p className="text-center text-muted px-8 text-sm">
          <Link
            href={"/register"}
            className="underline offset-4 text-foreground text-center"
          >
            アカウントを持っていませんか？
          </Link>
        </p>
      </div>
    </div>
  );
}
