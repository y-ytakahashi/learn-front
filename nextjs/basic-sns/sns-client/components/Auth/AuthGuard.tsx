"use client";
import type { ReactNode } from "react";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};
const AuthGuard = ({ children }: Props) => {
  const { authUser } = useAuthStore();
  const router = useRouter();

  if (!authUser.sub) {
    router.push("/");
  }

  return <>{children}</>;
};
export default AuthGuard;
