import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/database.types";
import { cookies } from "next/headers";
import SupabaseListener from "@/components/supabaseListener/supabaseListener";

type Props = {
  children: React.ReactNode;
}
const Layout = async ({ children }: Props) => {
  const supabase = createServerComponentClient<Database>({
    cookies
  });
  const { data: { session } } = await supabase.auth.getSession();
  return (
    <div>
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </div>
  );
};
export default Layout;
