import React from "react";
import styles from "./adminusers.module.css";
import { deleteUser } from "@/lib/action";
import { getUsers } from "@/lib/data";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <li className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/noavatar.png"}
              className={styles.avatar}
              width={50}
              height={50}
              alt="Avatar"
            />
            <span className={styles.userTitle}>{user.title}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userBtn}>Delete</button>
          </form>
        </li>
      ))}
    </div>
  );
};

export default AdminUsers;
