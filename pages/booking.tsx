import React, { useState } from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import style from "../styles/booking.module.css";
import Head from "next/head";
import FormRow from "../Components/FormRow";
import { useRouter } from "next/router";
import { useAppContext } from "Context/AppContext";

const Booking: React.FC = () => {
  const router = useRouter();
  const params = router.query;
  const { name, setName, email, setEmail, phone, setPhone, modal, setModal } = useAppContext();
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModal(true);
    setTimeout(() => {
      setModal(false);
      router.push("/");
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Express Bus -- Booking</title>
        <meta
          name="description"
          content="This is ticket reservation project -- booking page"
        />
      </Head>
      <div className={style.body}>
        <section
          className={`${style.booking_section} ${
            modal ? style.booking_blur__V8FN3 : ""
          }`}
        >
          <div className={style.booking_form}>
            <form onSubmit={formSubmit} method="post">
              <FormRow
                label={"Ad Soyad"}
                type={"text"}
                placeholder={"Ozkan demir"}
                state={setName}
                value={name}
              />
              <FormRow
                label={"E-posta"}
                type={"email"}
                placeholder={"ozkanndemir2009@gmail.com"}
                state={setEmail}
                value={email}
              />
              <FormRow
                label={"Telefon"}
                type={"tel"}
                placeholder={"03XXXXXXXXX"}
                state={setPhone}
                value={phone}
              />
              <div className={style.elem_group}>
                <label htmlFor="destination_section">Varış Yerini Seçin</label>
                <select
                  id="destination_section"
                  name="destination_preference"
                  required
                >
                  <option value={`${params.destination} to ${params.arrival}`}>
                    {params.destination} to {params.arrival}
                  </option>
                </select>
              </div>
              <div className="user_details">
                <div
                  className={` ${style.user_details_col_2} ${style.input_box}`}
                >
                  <label className={style.details}>Koltuk Numarası</label>
                  <input type="number" value={params.seat} readOnly />
                </div>
                <div
                  className={` ${style.user_details_col_2} ${style.input_box}`}
                >
                  <label className={style.details}>Hareket Tarihi</label>
                  <input type="date" value={params.departureDate} readOnly />
                </div>
              </div>
              <button
                style={{ width: "100%", height: "3rem" }}
                className="btn book_btn"
                id={style.book_btn}
                type="submit"
              >
                Rezervasyon Yap
              </button>
            </form>
          </div>
          <div className={style.booking_desc}>
            <h1>
              REZERVASYON <br /> YAP
            </h1>
            <p>Rezervasyonunuzu En İyi Hizmette Yapın</p>
          </div>
        </section>
        <div
          className={`${style.SubmitModal} ${
            modal ? style.booking_showModal__fkyzv : ""
          }`}
        >
          <FaCheckCircle /> &nbsp; Seat Successfully reserved
        </div>
      </div>
    </>
  );
};

export default Booking;
