import React, { useState } from "react";
import style from "../styles/buses.module.css";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { useAppContext } from "Context/AppContext";
const Buses:React.FC = () => {
   const {
     showSeats,
     setShowSeats,
     totalseats,
     setTotalSeats,
     selectSeat,
     setSelectSeat,
   } = useAppContext();
  const router = useRouter();
  const params = router.query;
  const rendered: JSX.Element[] = [];
  const array: string[] = ["12:00pm", "1:00pm", "2:00pm", "3:00pm"];
   for (let i = 1; i <= totalseats; i++) {
    rendered.push(
      <button
        style={{ backgroundColor: selectSeat === i ? "red" : "" }}
        onClick={() => setSelectSeat(i)}>
        {i}
      </button>
    );
  }

  return (
    <>
      <Head>
        <title>Express Bus -- Available Buses</title>
        <meta
          name="description"
          content="This is ticket reservation project -- available page"
        />
      </Head>
      <section
        className={`${style.available_seats_section} ${
          showSeats ? "buses_blur__a_F5e" : ""
        }`}
      >
        <h1 className={style.heading}>
          {params.destination} to {params.arrival}
        </h1>
        <h1>Uygun Seferler</h1>
        {array.map((element) => {
          return (
            <>
              <div className={style.available_bus_wrapper}>
                <div>
                  <div>
                    <p>
                      Tür: <b>Lüx</b>
                    </p>
                    <p>
                      Toplam Koltuk: <b>{totalseats}</b>
                    </p>
                    <p>
                      Tarih : <b>{params.departureDate}</b>
                    </p>
                    <p>
                      Saat : <b>{element}</b>
                    </p>
                    <p>
                      Fiyat: <b>500 TL </b>
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    className={style.book_btn}
                    type="submit"
                    onClick={() => {
                      setShowSeats(true);
                      const params = new URLSearchParams(
                        window.location.search
                      );
                      params.set("total_seats", totalseats.toString());
                      window.history.replaceState(
                        {},
                        "",
                        decodeURIComponent(
                          `${window.location.pathname}?${params}`
                        )
                      );
                    }}
                  >
                   Koltuk Seç
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </section>

      <div
        className={`${style.seats_wrapper} ${
          showSeats ? "buses_show__At34N" : ""
        }`}
      >
        <h2>Kullanılabilir Koltuklar</h2>

        <div className={style.seatsplan}>{rendered}</div>
        <button id={style.cancel_btn} onClick={() => setShowSeats(false)}>
          <FaTimes />
        </button>
        {selectSeat != null && (
          <Link
            href={`/booking?destination=${params.destination}&arrival=${params.arrival}&departureDate=${params.departureDate}&seat=${selectSeat}`}
            passHref
          >
            <button className={style.seatPlanBtn} type="submit">
              Bilet Al
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Buses;
