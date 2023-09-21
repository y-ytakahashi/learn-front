"use client";
import styles from "./page.module.scss";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "@/lib/apiClient";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const signUpFormSchema = z.object({
    username: z.string().min(1).max(20),
    email: z.string().email(),
    password: z
      .string()
      .min(2, { message: "Please enter a password of 2 or more digits" })
      .max(20)
      .regex(/^[a-zA-Z0-9]+$/, {
        message: "Please enter by British Characters, English lowercase letters, and numbers"
      })
  });

  type signInFormSchemaType = z.infer<typeof signUpFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<signInFormSchemaType>({
    resolver: zodResolver(signUpFormSchema)
  });

  const router = useRouter();

  const onSubmit = async (data: signInFormSchemaType) => {
    try {
      const res = await apiClient.post("/auth/register", { ...data });
      console.log(res.data);
      router.push("/signIn");
    } catch (e) {
      alert("Invalid input");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.item}
          type={"text"}
          placeholder={"Enter your name"}
          required
          {...register("username")}
        />
        {errors.username && <p>{errors.username.message}</p>}

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
          Create Account
        </button>
      </form>
    </div>
  );
}
