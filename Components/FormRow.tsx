import React, { ChangeEvent } from "react";
import style from "../styles/FormRow.module.css";

interface FormRowProps {
  type: string;
  placeholder: string;
  label: string;
  classname?: string;
  state: (value: string) => void;
  value: string;
  name?:string;
}

const FormRow: React.FC<FormRowProps> = ({
  type,
  placeholder,
  label,
  classname = "",
  state,
  value,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    state(e.target.value);
  };

  return (
    <div className={`${classname} ${style.input_box}`}>
      <label className={style.details}>{label}</label>
      <input
        onChange={handleInputChange}
        type={type}
        value={value}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormRow;
