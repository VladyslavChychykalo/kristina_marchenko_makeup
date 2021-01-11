import React from "react";
import { Helmet } from "react-helmet";
import {
  additionalInfo,
  servicesWrapper,
  servicesList,
  info,
} from "./Services.module.css";

const services = [
  { id: 1, service: "Макияж", price: "1000₴" },
  { id: 2, service: "Прическа на сухие волосы", price: "1000₴" },
  { id: 3, service: "Макияж + прическа", price: "1800₴" },
  { id: 4, service: "Свадебный образ", price: "2800₴" },
  { id: 5, service: "Свадебный макияж", price: "1600₴" },
  { id: 6, service: "Свадебная прическа", price: "1600₴" },
  // { id: 7, service: "Окрашивание и моделирование бровей", price: "350₴" },
  // { id: 8, service: "Ламинирование бровей", price: "350₴" },
];

const Services = () => (
  <div className={servicesWrapper}>
    <Helmet>
      <title>Услуги</title>
      <link
        rel="canonical"
        href="http://www.makeupschoolmarchenko.com.ua/#/home"
      />
      <meta
        name="description"
        content="Макияж, Прическа на сухие волосы, Макияж + прическа, Свадебный образ, Свадебный макияж, Свадебная прическа, Окрашивание и моделирование бровей, Ламинирование бровей"
      />
    </Helmet>

    <ul className={servicesList}>
      {services.map(({ id, service, price }) => (
        <li key={id}>
          <p className={info}>{service}</p>
          <p className={info}>{price}</p>
        </li>
      ))}
    </ul>
    <p className={additionalInfo}>Цена указана без выезда</p>
  </div>
);

export default Services;
