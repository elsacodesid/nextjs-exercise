import Image from "next/image";
import styles from "./about.module.css"

export const metadata = {
  title: "About Page",
  description: "About Desc...",
};



const AboutPage = () => {
  // console.log("Let's check where it works")
  return (<div>
    <div className={styles.container}>    
    <div className={styles.textContainer}><h2 className={styles.subtitle}>About Agency</h2><h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maiores!</h1>
    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta iusto mollitia veritatis beatae est quis vitae quibusdam nisi quisquam. Facilis reiciendis, et quis quaerat quos fugit? Ipsam, dignissimos odio.</p>
    <div className={styles.boxes}>
      <div className={styles.box}><h1>10+</h1><p>Years of experience</p></div>
      <div className={styles.box}><h1>10+</h1><p>Years of experience</p></div>
      <div className={styles.box}><h1>10+</h1><p>Years of experience</p></div>
    </div>
    </div>

    <div className={styles.imgContainer}><Image className={styles.img} src="/about.png" alt="" fill/></div>
    </div>

  </div>);
};

export default AboutPage;
