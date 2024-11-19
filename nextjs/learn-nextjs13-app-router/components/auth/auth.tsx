"use client";
import useStore from "@/store";
import { FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/utils/supabase";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";

const Auth = () => {
  const { loginUser } = useStore();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword(
        { email, password }
      );
      setEmail("");
      setPassword("");
      if (error) {
        alert(error.message);
      } else {
        router.push("/auth/todoCrud");
      }
    } else {
      const { error } = await supabase.auth.signUp(
        { email, password }
      );
      setEmail("");
      setPassword("");
      if (error) {
        alert(error.message);
      }
    }
  };

  const signOut = () => supabase.auth.signOut();
  const toggleMode = useCallback(() => setIsLogin(!isLogin), [isLogin]);


  return (
    <div>
      <p>{loginUser.email}</p>
      <ArrowRightOnRectangleIcon onClick={signOut} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email
            <input type={"email"} id={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label htmlFor="password">Password
            <input type={"password"} id={"password"} value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <div>
          <button type={"submit"}>{isLogin ? "Login" : "Register"}</button>
        </div>
      </form>
      <p onClick={toggleMode}>Change mode ?</p>
    </div>
  );
};
export default Auth;
