import React from "react";
import style from "../styles/guidelines.module.css";
import { FaStreetView, FaBusAlt, FaClock } from "react-icons/fa";
import GuidelineBox from "./GuidelineBox";

const Guidelines: React.FC = () => {
  return (
    <section className={style.guideline_section}>
      <div className={style.guideline_wrapper}>
        <div>
          <h1>
            Online Biletinizi Almak İçin <br />
            3 Adımı İzleyin
          </h1>
        </div>
        <div className={style.guideline_boxes_wrapper}>
          <GuidelineBox
            Icon={FaStreetView}
            heading={"Hedefinizi Seçin"}
            desc={"2 Varış Noktasından bir hedefi seçin"}
            classname={"guideline_1"}
          />

          <GuidelineBox
            Icon={FaBusAlt}
            heading={"Koltuğunuzu Seçin"}
            desc={"1 den 20 ye kadar koltuk numaranızı seçin"}
            classname={"guideline_2"}
          />
          <GuidelineBox
            Icon={FaClock}
            heading={"Zaman Seçin"}
            desc={"Seyehatin tarihini ve zamanını seçin"}
            classname={"guideline_3"}
          />
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
