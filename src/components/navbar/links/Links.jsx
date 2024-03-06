"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const Links = ({ auth }) => {
  const [open, setOpen] = useState(false);
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  console.log(auth?.user);
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink item={link} />
          </li>
        ))}
        {auth?.user ? (
          <>
            {auth.user.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </ul>
      <Image
        src="/menu.png"
        alt="Burger Menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuBtn}
      />
      {open && (
        <ul className={styles.mobileLinks}>
          {links.map((link) => (
            <li key={link.title}>
              <NavLink item={link} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Links;
