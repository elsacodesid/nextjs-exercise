import { handleGithubLogin, login } from "@/lib/action";
import styles from "./login.module.css";

const LoginPage = async () => {

  return (
    <div>
      <form action={handleGithubLogin}>
        {" "}
        <button>Login with GitHub</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="username" name="username"></input>
        <input type="password" placeholder="password" name="password"></input>
        <button>Login with credentials</button>
      </form>
    </div>
  );
};

export default LoginPage;
