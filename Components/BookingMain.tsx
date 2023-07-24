import React, { useState } from "react";
import style from "../styles/bookingMain.module.css";
import { useRouter } from "next/router";
import { useAppContext } from "Context/PagesContext";

const BookingMain: React.FC = () => {
  const {
    destination,
    setDestination,
    arrival,
    setArrival,
    departureTDate,
    setDepartureDate,
  } = useAppContext();
  console.log(destination);
  console.log(arrival);
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(
      `/buses?destination=${destination}&arrival=${arrival}&departureDate=${departureTDate}`
    );
  };

  return (
    <section id="booking" className={style.booking_section}>
      <div className={style.container}>
        <h1>Otobüs Bileti Ayırtın</h1>
        <div>
          <form onSubmit={formSubmit}>
            <select
              name="departure"
              id="departure"
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="Ankara Üniversitesi">Ankara Üniversitesi</option>
              <option value="Hacettepe Üniversitesi">Hacettepe Üniversitesi</option>
            </select>
            <select
              required={true}
              name="arrival"
              onChange={(e) => setArrival(e.target.value)}
            >
              <option value="">Select Arrival</option>
              <option value="İstanbul Üniversitesi">İstanbul Üniversitesi</option>
              <option value="Yıldız Teknik Üniversitesi">Yıldız Teknik Üniversitesi </option> 
            </select>
            <input
              required={true}
              type="date"
              name="departure_date"
              onChange={(e) => setDepartureDate(e.target.value)}
              id={style.departure_date}
              min={today}
            />
            <button className="book_btn" type="submit">
              Sefer Ara
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingMain;
