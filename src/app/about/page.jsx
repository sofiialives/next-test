import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "Sofiko's website about page to get acquainted with our website",
};

const AboutPage = () => {
  const rates = [
    { title: "10 K+", text: "Year of experience" },
    { title: "234 K+", text: "People reached" },
    { title: "5 K+", text: "Services and plugins" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.subtitle}>About Agency</h1>
        <h2 className={styles.title}>
          We are the best choice you have ever made!
        </h2>
        <p className={styles.descr}>
          Welcome to our photo agency, where excellence meets imagery. We take
          pride in being the epitome of photographic brilliance on a global
          scale. With a commitment to unparalleled creativity and precision, our
          agency stands as the undisputed leader in the world of photography.
          Explore the extraordinary, capture the essence of the moment, and
          discover why we are the foremost choice for those who seek the very
          best. Your journey to visual perfection starts here – because when it
          comes to photos, we define excellence.
        </p>
        <ul className={styles.boxes}>
          {rates.map((rate, index) => (
            <li key={index} className={styles.box}>
              <h1>{rate.title}</h1>
              <p>{rate.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default AboutPage;
