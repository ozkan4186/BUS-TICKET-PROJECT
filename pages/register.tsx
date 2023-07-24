import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import style from "../styles/login-register.module.css";
import Head from "next/head";
import FormRow from "../Components/FormRow";
import { useRouter } from "next/router";
import { useAppContext } from "Context/AppContext";

const Register: React.FC = () => {
  const router = useRouter();
  const {
    username,
    password,
    formmsg,
    setUsername,
    setPassword,
    email,
    setEmail,
    phone,
    setPhone,
    date,
    setDate,
    confirmpassword,
    setConfirmpassword,
    formmsgs,
    setFormmsgs,
    name,
    setName,
  } = useAppContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name || email || password || formmsgs.length > 0) {
      setFormmsgs([{ msg: "Registered Successfully" }]);
      setUsername("");
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmpassword("");
      router.push("/login");
    }
    console.log("jksldsldjls");
  };

  return (
    <>
      <Head>
        <title>Express Bus -- Register</title>
        <meta
          name="description"
          content="This is ticket reservation project -- register page"
        />
      </Head>
      <div className={style.body}>
        <div className={style.container}>
          {formmsgs.map((msg, index) => (
            <div
              key={index}
              className={`${style.form_msg_wrapper} success_wrapper`}
            >
              <div>
                <FaCheckCircle />
                {msg.msg}
              </div>
            </div>
          ))}
          <div className={style.title}>Kayıt Ol</div>
          <div className={style.content}>
            <form onSubmit={handleSubmit} method="post">
              <div className="user_details">
                <FormRow
                  label={"Ad Soyad"}
                  type={"text"}
                  placeholder={"Adınızı Giriniz"}
                  classname={"input_box_col_2"}
                  name={"name"}
                  state={setName}
                  value={name}
                />
                <FormRow
                  label={"Kullanıcı Adı"}
                  type={"text"}
                  placeholder={"Kullanıcı Adınızı Giriniz"}
                  classname={"input_box_col_2"}
                  name={"username"}
                  state={setUsername}
                  value={username}
                />
                <FormRow
                  type={"email"}
                  placeholder={"E-postanızı giriniz"}
                  label={"E-posta"}
                  classname={"input_box_col_2"}
                  name={"email"}
                  state={setEmail}
                  value={email}
                />
                <FormRow
                  type={"tel"}
                  placeholder={"Telefon Numaranızı Giriniz"}
                  label={"Telefon Numarası"}
                  classname={"input_box_col_2"}
                  name={"phone"}
                  state={setPhone}
                  value={phone}
                />
                <FormRow
                  type={"option"}
                  placeholder={"Cinsiyetinizi Giriniz"}
                  label={"Cinsiyet"}
                  classname={"input_box_col_2"}
                  name={"phone"}
                  state={setPhone}
                  value={phone}
                />

                <FormRow
                  type={"date"}
                  placeholder={"Doğum Tarihi"}
                  label={"Date of birth"}
                  classname={"input_box_col_2"}
                  name={"date"}
                  state={setDate}
                  value={date}
                />
                <FormRow
                  type={"password"}
                  placeholder={"Şifrenizi Giriniz"}
                  label={"Şifre"}
                  classname={"input_box_col_2"}
                  name={"password"}
                  state={setPassword}
                  value={password}
                />
                <FormRow
                  type={"password"}
                  placeholder={"Şifrenizi Doğrulayın"}
                  label={"Şifreyi Onayla"}
                  classname={"input_box_col_2"}
                  state={setConfirmpassword}
                  value={confirmpassword}
                />
              </div>

              <div className={style.button}>
                <input type="submit" value="Kayıt Ol" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
