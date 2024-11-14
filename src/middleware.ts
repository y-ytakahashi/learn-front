import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  const isAuthPage =
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register");

  console.log(isAuthPage);

  const isAuth = !!token;

  // redirect設定
  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // ログインした後に参照していたページに戻す処理を追加したい
    return null;
  }

  if (!isAuth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more middlewareを有効にしたいページを指定
export const config = {
  matcher: ["/dashboard/:path", "/editor/:path", "/login", "/register"],
};
