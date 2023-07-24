import React from "react";
import style from "../styles/detail.module.css";

const Detail: React.FC = () => {
  return (
    <section className={style.detail_section}>
      <div className={style.detail_wrapper}>
        <h1>Önemli Olan Bazı Sayılar</h1>
        <p>Rakamlarla Anlatılan Yolculuklardaki Başarımız </p>
        <div className={style.detail_boxes_wrapper}>
          <div className={style.detail_box}>
            <h1>100+</h1>
            <p>Güzel Otobüsler</p>
          </div>
          <div className={style.detail_box}>
            <h1>250+</h1>
            <p>Yolculuk Tamamlandı</p>
          </div>
          <div className={style.detail_box}>
            <h1>25+</h1>
            <p>Kazanılan Ödüller</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
