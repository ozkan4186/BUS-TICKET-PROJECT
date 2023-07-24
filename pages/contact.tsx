import React, { useState } from "react";
import style from "../styles/contact.module.css";
import {
  FaEnvelope,
  FaSearchLocation,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";
import Head from "next/head";
import FormRow from "../Components/FormRow";
import { useAppContext } from "Context/AppContext";

const Contact: React.FC = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    subject,
    setSubject,
    message,
    setMessage,
    formmsg,
    setFrommsg,
  } = useAppContext();
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name || email || subject || message) {
      setFrommsg({ msg: "Form successfully submitted" });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <>
      <Head>
        <title>Express Bus -- Contact</title>
        <meta
          name="description"
          content="This is ticket reservation project -- contact page"
        />
      </Head>
      <section className={style.contact_section}>
        <div className={style.contact_wrapper}>
          <div className={style.row_1}>
            <div className={style.heading}>TEMASTA OLMAK</div>
            <h3 className={style.heading_2}>BİZE ULAŞIN</h3>
          </div>
          <div className={style.row_2}>
            <div className={style.col_1}>
              <div className={style.item_wrapper}>
                <div>
                  <i>
                    <FaEnvelope />
                  </i>
                </div>
                <p>
                  <a href="ozkanndemir2009@gmail.com" className={style.colored}>
                    <abbr title=" Click to send a message">
                      ozkanndemir2009@gmail.com
                    </abbr>
                  </a>
                </p>
              </div>
              <div className={style.item_wrapper}>
                <div>
                  <i>
                    <FaSearchLocation />
                  </i>
                </div>
                <p>Maltepe,İstanbul</p>
              </div>
              <div className={style.item_wrapper}>
                <div>
                  <i>
                    <FaPhone />
                  </i>
                </div>
                <p>
                  <a href="tel:+905331522369" className={style.colored}>
                    <abbr title="Click to call">+9005331522369</abbr>
                  </a>
                </p>
              </div>
            </div>
            <div className={style.col_2}>
              {formmsg.msg && (
                <div className={`${style.form_msg_wrapper} success_wrapper`}>
                  <div>
                    <FaCheckCircle />
                    {formmsg.msg}
                  </div>
                </div>
              )}
              <form onSubmit={formHandler}>
                <FormRow
                  label="Ad Soyad"
                  type={"text"}
                  placeholder={"Ad ve Soyad Giriniz"}
                  name={"name"}
                  state={setName}
                  value={name}
                />
                <FormRow
                  label="E-posta"
                  type={"email"}
                  placeholder={"E-postanızı giriniz"}
                  name={"email"}
                  state={setEmail}
                  value={email}
                />
                <FormRow
                  label="Konu"
                  type={"text"}
                  placeholder={"Konu Giriniz"}
                  name={"subject"}
                  state={setSubject}
                  value={subject}
                />

                <textarea
                  className={style.message}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="Mesaj"
                ></textarea>
                <button type="submit" className={`${style.submitBtn} btn`}>
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
