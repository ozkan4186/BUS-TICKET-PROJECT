import React from 'react'
import style from '../styles/routes.module.css'
import Link from 'next/link'
import RouteBox from './RouteBox'
const Routes:React.FC = () => {
    return (
      <section className={style.routes_section}>
        <div>
          <h1>Routes</h1>
          <div className={style.routes_wrapper}>
            <RouteBox
              imgpath={"/images/islamabad.jpg"}
              alt={"Islamabad"}
              destination={"Ankara to Islamabad"}
              time={"8am"}
            />
            <RouteBox
              imgpath={"/images/lahore.jpg"}
              alt={"Lahore"}
              destination={"Ankara to Lahore"}
              time={"12pm"}
            />
            <RouteBox
              imgpath={"/images/karachi.jpg"}
              alt={"Karachi"}
              destination={"Ankara to Karachi"}
              time={"5pm"}
            />
          </div>
        </div>
      </section>
    );
}

export default Routes