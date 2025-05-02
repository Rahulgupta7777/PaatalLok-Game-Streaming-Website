"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Sidebar from "./Sidebar";
import styles from "./Navbar.module.css";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="PaatalLok Logo"
            width={48}
            height={48}
            className={styles.header_leftLogo}
          />
        </Link>
        <Link href="/browse">
          <h2>Streaming Channels</h2>
        </Link>

        <div className={styles.header_verticalLine}></div>

        <h2 onClick={toggleSidebar}>Following</h2>
      </div>

      <div className={styles.header_center}>
        <input type="text" placeholder="Search" />
        <div className={styles.header_centerLogoContainer}>
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className={styles.header_right}>
        <div className={styles.header_rightContainer}>
          <i className="fas fa-crown"></i>

          <div className={styles.header_rightBits}>
            <i className="fa fa-gem"></i>
            <h4>Get Bits</h4>
          </div>
          <Avatar />
        </div>
      </div>

      {isSidebarOpen && (
        <div ref={sidebarRef} className={styles.sidebarWrapper}>
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default Navbar;
