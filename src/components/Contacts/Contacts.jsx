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
          <p>Адрес: улица Льва Толстого, 39.</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.496967847581!2d30.500393694348944!3d50.441213617801886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef117b792e5%3A0x4ee320886adf7394!2z0YPQuy4g0JvRjNCy0LAg0KLQvtC70YHRgtC-0LPQviwgMzksINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1631814096739!5m2!1sru!2sua"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0, marginTop: "20px" }}
          allowfullscreen=""
          ariaHidden="false"
          loading="lazy"
          tabIndex="0"
        />
      </div>
    </div>
  </>
);

export default Contacts;
