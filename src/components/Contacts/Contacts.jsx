import React from "react";
import WrappedMap from "./Map/Map";
import SocialLinks from "./SocialLinks/SocialLinks";
import {
  mapWrapper,
  map,
  info,
  contactsWrapper,
  contactsBackgrond,
} from "./Contacts.module.css";

const Contacts = () => (
  <>
    <div className={contactsBackgrond}></div>
    <div className={contactsWrapper}>
      <p className={info}>
        Контактный номер: <a href="tel:+380970003090">(097)000-30-90</a>
      </p>
      <p className={info}>Почта: 309072@gmail.com</p>
      <p className={info}>
        Адрес: студия находится в 5-ти минутах от метро Печерская, ул. Евгения
        Коновальца,36 е
      </p>
      <SocialLinks />
      <div className={mapWrapper}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCVwLxr93PoHBzTHHtifMaDRfVMME7y0eo&v=3.exp&libraries=geometry,drawing,places`}
          // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCVwLxr93PoHBzTHHtifMaDRfVMME7y0eo&v=3.exp&libraries=geometry,drawing,places`}
          // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className={map} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  </>
);

export default Contacts;
