import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";
import { useMediaQuery } from "../../hooks";

const Header = () => {
  const isMobile = useMediaQuery(640);
  const [menuOpen, setMenuOpen] = useState(false);
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        {isMobile && (
          <div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${styles.burger_menu}  ${
                menuOpen ? styles.open : ""
              }`}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        )}
        <nav
          className={`${!isMobile ? styles.header__nav : styles.menu} ${
            menuOpen ? styles.open : ""
          }`}
        >
          <ul
            className={`${
              !isMobile ? styles.header__nav__list : styles.list_reset
            }`}
          >
            <li
              className={`${
                !isMobile ? styles.header__nav__item : styles.menu__item
              }`}
            >
              <Link
                className={styles.header__nav__link}
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Обо мне
              </Link>
            </li>
            <li
              className={`${
                !isMobile ? styles.header__nav__item : styles.menu__item
              }`}
            >
              <Link
                className={styles.header__nav__link}
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Навыки
              </Link>
            </li>
            <li
              className={`${
                !isMobile ? styles.header__nav__item : styles.menu__item
              }`}
            >
              <Link
                className={styles.header__nav__link}
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Портфолио
              </Link>
            </li>
            <li
              className={`${
                !isMobile ? styles.header__nav__item : styles.menu__item
              }`}
            >
              <Link
                className={styles.header__nav__link}
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Обратная связь
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
