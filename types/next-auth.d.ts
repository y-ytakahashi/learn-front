import NextAuth from "next-auth";

declare module "next-auth" {
  interface JWT {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface Session {
    user: User & {
      id: string;
    };
  }
}
