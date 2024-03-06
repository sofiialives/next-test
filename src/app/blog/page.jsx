import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blog Page",
  description: "Sofiko's website blog page too look at all photos",
};

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <ul className={styles.container}>
      {posts.map((post) => (
        <li key={post.userId} className={styles.post}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default BlogPage;
