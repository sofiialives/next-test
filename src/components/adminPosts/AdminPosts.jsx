import React from "react";
import styles from "./adminposts.module.css";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <li className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noavatar.png"}
              className={styles.avatar}
              width={50}
              height={50}
              alt="Photo"
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postBtn}>Delete</button>
          </form>
        </li>
      ))}
    </div>
  );
};

export default AdminPosts;
