import Image from "next/image";
import styles from "./SinglePost.module.css";

const SinglePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.jpg" fill alt="" className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="/avatar.jpg" alt="" width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>EzraBridger</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum velit doloribus autem laboriosam, aut ipsum culpa omnis. Nesciunt, accusamus? Ipsum doloribus perspiciatis incidunt tempore eveniet deleniti sit, voluptates culpa, nobis non magnam unde autem assumenda quia labore quis esse ab accusamus ipsa excepturi. Exercitationem doloremque aperiam sequi pariatur amet?
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
