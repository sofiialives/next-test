import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Photos Agency.</h1>
        <p className={styles.descr}>
          {
            "Unrivaled in the world of photography. Discover why we're the best."
          }
        </p>
        <ul className={styles.buttons}>
          <button type="button" className={styles.button}>
            Learn More
          </button>
          <button type="button" className={styles.button}>
            Contact
          </button>
        </ul>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
