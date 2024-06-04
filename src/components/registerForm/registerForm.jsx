"use client";
import { useState, useEffect } from "react";
import styles from "./registerForm.module.css";
import { handleRegister } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, setState] = useState({ success: false, error: null });
  const router = useRouter();

  const formAction = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await handleRegister(null, formData);
    setState(result);
  };

  useEffect(() => {
    if (state.success) {
      router.push("/login");
    }
  }, [state.success, router]);

  return (
    <form onSubmit={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" required></input>
      <input type="email" placeholder="email" name="email" required></input>
      <input type="password" placeholder="password" name="password" required></input>
      <input type="password" placeholder="password again" name="passwordRepeat" required></input>
      <button type="submit">Register</button>
      {state.error && <p className={styles.error}>{state.error}</p>}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
