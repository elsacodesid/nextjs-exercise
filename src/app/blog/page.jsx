import PostCard from "@/components/post-card/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// Fetch data with api

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const BlogPage = async () => {
  //Fetch data with api
  const posts = await getData();

  //Fetch data without api
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
