import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "Sofiko's website contact page to leave a review or contact the company to post a photo",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact Image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name and Surname " />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number (Optional)" />
          <textarea cols="30" rows="10" placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
