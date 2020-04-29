import React from "react";
import { socialIocns, link, socialLink } from "./SocialLinks.module.css";
import { ReactComponent as Instagram } from "../../../assets/svg/instagramIcon.svg";
import { ReactComponent as Facebook } from "../../../assets/svg/facebookIcon.svg";

const SocialLinks = () => (
  <div className={socialIocns}>
    <a className={link} href="https://www.instagram.com/kristina_makeups/">
      <Instagram className={socialLink} />
    </a>
    <a className={link} href="https://www.facebook.com/sizenka">
      <Facebook className={socialLink} />
    </a>
  </div>
);

export default SocialLinks;
