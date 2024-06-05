"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./adminPostForm.module.css";
import { addPost } from "@/lib/action";

const AdminPostForm = ({userId}) => {
  const [state, setState] = useState({ success: false, error: null });
  const router = useRouter();
  const formAction = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await addPost(null, formData);
    setState(result);
  };

  return (
    <div className={styles.container}>
 
    <div className={styles.wrapper}>
    <form onSubmit={formAction} className={styles.form}>
      <input type="hidden" name="userId" value={userId}></input>
      <input type="text" placeholder="title" name="title"></input>
      <input type="text" placeholder="slug" name="slug"></input>
      <textarea type="text" placeholder="desc" name="desc" rows={10}></textarea>
      <button type="submit">Add Post</button>
      {state.error && <p>{state.error}</p>}

    </form>
    </div>
    </div>
  );
};

export default AdminPostForm;
