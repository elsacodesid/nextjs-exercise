import { getUser } from "@/lib/data";
import styles from "./PostUser.module.css";

const PostUser = async ({ userId }) => {
  let user;
  try {
    user = await getUser(userId);

  } catch (error) {
    console.error("Failed to fetch user:", error);
    user = null;
  }

  if (!user) {
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
      <span className={styles.name}>{user.name}</span>
    </div>
  );
};

export default PostUser;
