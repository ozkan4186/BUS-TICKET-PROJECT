import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "../styles/navbar.module.css";
import Link from "next/link";
const Navbar:React.FC = () => {
   const [scroll, setScroll] = useState<boolean>(false);
   const [showNav, setShowNav] = useState<boolean>(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  }, []);
  return (
    <>
      <nav
        style={scroll ? { backgroundColor: "crimson" } : {}}
        className={`${style.navbar}`}
      >
        <div
          className={`${style.navbar_wrapper} ${
            showNav ? "navbar_change_navbar_wrapper__bNJK0" : ""
          }`}
        >
          <div className={style.navbar_left}>
            <h1 className={style.logo}>
              Bilet<span>All</span>
            </h1>
          </div>
          <div className={style.navbar_right}>
            <ul className={style.btns_list}>
              <Link href="/" passHref>
                <li>
                  <a>Ev</a>
                </li>
              </Link>
              <li>
                <a href="#booking">Rezervasyon</a>
              </li>
              <Link href="/contact" passHref>
                <li>
                  <a>Bize Ulaşın</a>
                </li>
              </Link>
              <Link href="/login" passHref>
                <li>
                  <a>Giriş Yap</a>
                </li>
              </Link>
              <Link href="/register" passHref>
                <li>
                  <a>Kayıt Ol</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <i
          className={`${style.hamburger_wrapper} ${
            showNav ? "navbar_changehamburger__Az0kW" : ""
          }`}
          onClick={() => setShowNav(!showNav)}
        >
          <FaBars />
        </i>
      </nav>
    </>
  );
};

export default Navbar;
