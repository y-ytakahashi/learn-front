import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Github from "next-auth/providers/github";
import { db } from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github],
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email ?? "";
        session.user.image = token.picture;
      }
      return session;
    },
    async authorized() {
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
});
