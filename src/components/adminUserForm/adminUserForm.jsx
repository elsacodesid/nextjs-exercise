"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";

const AdminUserForm = () => {
  const [state, setState] = useState({ success: false, error: null });
  const router = useRouter();
  const formAction = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await addUser(null, formData);
    setState(result);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
            <form onSubmit={formAction} className={styles.form}>
            <input type="text" placeholder="username" name="username"></input>
            <input type="text" placeholder="email" name="email"></input>
            <input type="password" placeholder="password" name="password"></input>
            <select name="isAdmin">
                <option value="false">Is Admin?</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>

            <button type="submit">Add New User</button>
            {state.error && <p>{state.error}</p>}
            </form>
      </div>
    </div>
  );
};

export default AdminUserForm;
