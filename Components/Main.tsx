import React from "react";
import style from "../styles/main.module.css";
const Main:React.FC  = () => {
  return (
    <main className={style.main}>
      <div className={style.main_contents}>
        <h1>
          Güvenli Seyahat Yolculuğunuz  <br />
          Ana Hedefimizdir
        </h1>
        <p>Hedefinize Tam Zamanında Ulaşın</p>
        <a href="#booking" className={`${style.book_btn} btn`}>
          Yerinizi Ayırın
        </a>
      </div>
    </main>
  );
};

export default Main;
