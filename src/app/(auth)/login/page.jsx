import { handleGithubLogin } from "@/lib/action";
import styles from "@/components/loginForm/loginForm.module.css";
import LoginForm from "@/components/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
       <form className={styles.form} action={handleGithubLogin}>
          <button>Login with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
