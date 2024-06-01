// "use client"

import Image from "next/image";
import styles from "./contact.module.css";
import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=> import ("@/components/HydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact Desc...",
};


const ContactPage = () => {
  // const a = Math.random()
  // console.log(a)

  return <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="/contact.jpg" alt="" fill className={styles.img} />
    </div>
    <div className={styles.formContainer}>
      {/* <HydrationTestNoSSR /> */}
      <form action="" className={styles.form}>
        <input type="text" placeholder="Name and surname" />
        <input type="text" placeholder="E-mail address" />
        <input type="text" placeholder="Phone number (optional)" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>

  </div>;
};

export default ContactPage;
