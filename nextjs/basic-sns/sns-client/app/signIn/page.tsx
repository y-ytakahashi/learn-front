"use client";
import styles from "./page.module.scss";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/apiClient";
import useAuthStore from "@/store/useAuthStore";

export default function SignInPage() {
  const { signIn } = useAuthStore();

  const SignIn = z.object({
    email: z.string().email(),
    password: z.string().min(2, {
      message: "Please enter a password of 2 or more digits"
    })
  });

  type signUpFormSchemaType = z.infer<typeof SignIn>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<signUpFormSchemaType>({
    resolver: zodResolver(SignIn)
  });

  const router = useRouter();

  const onSubmit = async (data: signUpFormSchemaType) => {
    try {
      const res = await apiClient.post("/auth/login", { ...data });
      const { access_token } = res.data;
      signIn({ token: access_token });
      router.push("/");
    } catch (e) {
      alert("Invalid input");
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.item}
          type={"Enter your email"}
          placeholder={"Email"}
          required
          autoComplete={"email"}
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          className={styles.item}
          type={"Enter your password"}
          placeholder={"Password"}
          required
          autoComplete={"current-password"}
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button className={styles.submit} type={"submit"}>
          Let's go
        </button>
      </form>
    </div>
  );
}
