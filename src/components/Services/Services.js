import React from "react";
import { servicesWrapper, servicesList } from "./Services.module.css";

const services = [
  { id: 1, service: "Макияж", price: "1000₴" },
  { id: 2, service: "Прическа на сухие волосы", price: "1000₴" },
  { id: 3, service: "Макияж + прическа", price: "1600₴" },
  { id: 4, service: "Свадебный образ", price: "2500₴" },
  { id: 5, service: "Свадебный макияж", price: "1600₴" },
  { id: 6, service: "Свадебная прическа", price: "1500₴" },
  { id: 7, service: "Окрашивание и моделирование бровей", price: "350₴" },
  { id: 8, service: "Ламинирование бровей", price: "350₴" }
];

const Services = () => (
  <div className={servicesWrapper}>
    <ul className={servicesList}>
      {services.map(({ id, service, price }) => (
        <li key={id}>
          <p>{service}</p>
          <p>{price}</p>
        </li>
      ))}
    </ul>
    <p>Цена указана без выезда</p>
  </div>
);

export default Services;
