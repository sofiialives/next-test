import React, { Suspense } from "react";
import styles from "./singleblog.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.descr,
  };
};

const SingleBlogPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image
            src={post.img}
            alt="Post Photo"
            fill
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={"loading..."}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>11.02.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.descr}</div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
