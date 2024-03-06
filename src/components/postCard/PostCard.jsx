import React from "react";
import styles from "./postcard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              alt="Post Image"
              fill
              className={styles.img}
            />
          </div>
        )}
        <span className={styles.date}>{post.date}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.descr}>{post.descr}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
