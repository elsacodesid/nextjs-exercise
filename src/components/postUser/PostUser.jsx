import { getUser } from "@/lib/data";
import styles from "./PostUser.module.css";

const PostUser = async ({ _id }) => {
  let username;
  try {
    username = await getUser(_id);


  } catch (error) {
    console.error("Failed to fetch user:", error);

  }

  if (!username) {
    return (
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span>User not found</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.name}>{username}</span>
    </div>
  );
};

export default PostUser;
