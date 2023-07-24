import React from "react";
import style from "../styles/whyUs.module.css";
import {
  FaRegMoneyBillAlt,
  FaDollarSign,
  FaShieldAlt,
  FaWifi,
} from "react-icons/fa";
import Link from "next/link";

const WhyUs: React.FC = () => {
  return (
    <section className={style.why_us_section}>
      <div className={style.why_us_wrapper}>
        <div className={style.col_1}>
          <h1>
            Yolculuğunuz için neden bizi <br /> seçiyorsunuz?
          </h1>
          <p>Gerçekten iyi ve güvenilir transfer hizmeti sunuyoruz</p>
          <div className={style.row}>
            <div className={style.icon_wrapper}>
              <i>
                <FaRegMoneyBillAlt />
              </i>
            </div>
            <div className={style.content_wrapper}>
              <h3>Düşük Ücretler</h3>
              <p>Düşük fiyatla en iyi hizmeti sunuyoruz </p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.icon_wrapper}>
              <i>
                <FaDollarSign/>
              </i>
            </div>
            <div className={style.content_wrapper}>
              <h3>Kolay Ödeme Süreci</h3>
              <p>Çok kolay ödeme süreci sunuyoruz.</p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.icon_wrapper}>
              <i>
                <FaShieldAlt/>
              </i>
            </div>
            <div className={style.content_wrapper}>
              <h3>Güvenli Taşıma Garantisi</h3>
              <p>Çok güvenli ve emniyetli transfer garantisi sunuyoruz</p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.icon_wrapper}>
              <i>
                <FaWifi />
              </i>
            </div>
            <div className={style.content_wrapper}>
              <h3>Bedava İnternet</h3>
              <p>Yüksek Hızlı İnternet Erişimi Sunuyoruz </p>
            </div>
          </div>
          <a href="#booking" className={`${style.book_btn_sm} btn`}>
            Biletinizi Ayırın
          </a>
        </div>
        <div className={style.col_2}></div>
      </div>
    </section>
  );
};

export default WhyUs;
