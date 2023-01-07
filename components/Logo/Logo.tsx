import React from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <img className={styles.logo} src="/img/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
