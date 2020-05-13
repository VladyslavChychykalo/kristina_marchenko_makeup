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
        {/* <div className={mapWrapper}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA3CJD6gvJpBLfx0Az0UzQ3ipdcy-TqdME&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className={map} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div> */}
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2541.8885116657307!2d30.5338264!3d50.4245488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf119f87c289%3A0xde1620a2a1e69d5a!2z0YPQuy4g0JXQstCz0LXQvdC40Y8g0JrQvtC90L7QstCw0LvRjNGG0LAsIDM2LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1589393294476!5m2!1sru!2sua"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0, marginTop: "20px" }}
          allowFullScreen=""
          ariaHidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  </>
);

export default Contacts;
