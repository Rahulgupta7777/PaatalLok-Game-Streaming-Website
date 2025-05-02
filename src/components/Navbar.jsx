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
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const sidebarRef = useRef();
  const searchRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
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
        <Link href="/" className={styles.header_logoLink}>
          <Image
            src="/logo.png"
            alt="PaatalLok Logo"
            width={48}
            height={48}
            className={styles.header_leftLogo}
          />
        </Link>
        <Link href="/browse" className={styles.header_link}>
          <h2 className={styles.header_text}>Streaming Channels</h2>
        </Link>

        <div className={styles.header_verticalLine}></div>

        <h2
          className={`${styles.header_text} ${styles.header_following}`}
          onClick={toggleSidebar}
        >
          Following
          <i
            className={`fa fa-chevron-down ${styles.header_chevron} ${
              isSidebarOpen ? styles.rotated : ""
            }`}
          ></i>
        </h2>
      </div>

      <div
        className={`${styles.header_center} ${
          isSearchFocused ? styles.focused : ""
        }`}
      >
        <input
          type="text"
          placeholder="Search games, channels, or creators..."
          className={styles.header_search}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ref={searchRef}
        />
        <div className={styles.header_centerLogoContainer}>
          <i className="fas fa-search"></i>
        </div>
        {searchQuery && (
          <div
            className={styles.header_clearSearch}
            onClick={() => setSearchQuery("")}
          >
            <i className="fa fa-times"></i>
          </div>
        )}
      </div>

      <div className={styles.header_right}>
        <div className={styles.header_rightContainer}>
          <div className={styles.header_premium}>
            <i className="fas fa-crown"></i>
            <span className={styles.header_premiumText}>Premium</span>
          </div>


          <div className={styles.header_avatarContainer}>
            <Avatar
              className={styles.header_avatar}
              src="/helpii.png"
              alt="User Avatar"
            />
            <div className={styles.header_avatarStatus}></div>
          </div>
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
