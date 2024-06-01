import { getUser, getUserImg } from "@/lib/data";
import styles from "./PostUser.module.css";
import Image from "next/image";

const PostUser = async ({ _id }) => {
  let username;
  let userImg;
  try {
    username = await getUser(_id);

    userImg = await getUserImg(_id);
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
      <Image
        className={styles.avatar}
        src={userImg ? userImg : "/avatar.jpg"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.name}>{username}</span>
      </div>
    </div>
  );
};

export default PostUser;
