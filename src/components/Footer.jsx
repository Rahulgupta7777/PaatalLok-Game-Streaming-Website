"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_left}>
        <Image
          src="/logo.png"
          alt="PaatalLok Logo"
          width={40}
          height={40}
          className={styles.logo}
        />
        <p>© {new Date().getFullYear()} PaatalLok. All rights reserved.</p>
      </div>
    
      <div className={styles.footer_right}>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaXTwitter />
          
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />

        </a>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
