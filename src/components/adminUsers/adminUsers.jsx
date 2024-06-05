import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.post} key={user.username}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/avatar.jpg"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{user.username}</span>
          </div>

          <form action={deleteUser}>
            <input type="hidden" name="_id" value={user._id}></input>
            <button className={styles.postBtn}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
