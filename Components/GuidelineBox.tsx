import React, { ReactElement } from "react";
import style from "../styles/guidelines.module.css";

interface GuidelineBoxProps {
  Icon: React.FC;
  heading: string;
  desc: string;
  classname?: string;
}

const GuidelineBox: React.FC<GuidelineBoxProps> = ({
  Icon,
  heading,
  desc,
  classname = "",
}) => {
  return (
    <div className={`${style.guideline_box} ${classname}`}>
      <i>
        <Icon />
      </i>
      <h4>{heading}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default GuidelineBox;
