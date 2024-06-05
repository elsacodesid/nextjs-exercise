import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post._id.toString()}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/post.jpg"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>

          <form action={deletePost}>
            <input type="hidden" name="_id" value={post._id.toString()}></input>
            <button className={styles.postBtn}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
