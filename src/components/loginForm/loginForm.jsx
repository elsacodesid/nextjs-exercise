"use client";
import { useState, useEffect } from "react";
import styles from "./loginForm.module.css";
import { login } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, setState] = useState({ success: false, error: null });
  const router = useRouter();

  const formAction = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await login(null, formData);
    
    setState(result);

  };

  useEffect(() => {
    if (state.success) {
      router.push("/");
    }
  }, [state.success, router]);

  return (
    <form onSubmit={formAction} className={styles.form}>
             <input type="text" placeholder="username" name="username"></input>
          <input type="password" placeholder="password" name="password"></input>
      <button type="submit">Login</button>
      {state.error && <p className={styles.error}>{state.error}</p>}
      <Link href="/register">
       {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
