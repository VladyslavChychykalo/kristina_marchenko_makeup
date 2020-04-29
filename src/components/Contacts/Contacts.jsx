import React from "react";
import WrappedMap from "./Map/Map";
import SocialLinks from "./SocialLinks/SocialLinks";
import {
  mapWrapper,
  map,
  contactsBackground,
  contactsWrapper,
  contactsInfo,
  contactsOverlay,
} from "./Contacts.module.css";

const Contacts = () => (
  <>
    <div className={contactsBackground}></div>
    <div className={contactsOverlay}>
      <div className={contactsWrapper}>
        <div className={contactsInfo}>
          <p>
            Контактный номер: <a href="tel:+380970003090">(097)000-30-90</a>
          </p>
          <p>Почта: 309072@gmail.com</p>
          <p>
            Адрес: студия находится в 5-ти минутах от метро Печерская, ул.
            Евгения Коновальца,36 е
          </p>
        </div>
        <SocialLinks />
        <div className={mapWrapper}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA3CJD6gvJpBLfx0Az0UzQ3ipdcy-TqdME&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className={map} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </div>
  </>
);

export default Contacts;
