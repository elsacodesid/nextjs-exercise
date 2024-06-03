import { handleRegister } from "@/lib/action";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {" "}
        <form action={handleRegister} className={styles.form}>
          <input type="text" placeholder="username" name="username"></input>
          <input type="email" placeholder="email" name="email"></input>
          <input type="password" placeholder="password" name="password"></input>
          <input
            type="password"
            placeholder="password again"
            name="passwordRepeat"
          ></input>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
