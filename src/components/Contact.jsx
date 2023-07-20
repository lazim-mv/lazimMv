import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import AnimationWrapper from "./AnimationWrapper";

function Contact() {
  const phoneNumber = "+918921076209";
  const emailAddress = "lazimlatheef@gmail.com";

  const constructWhatsAppLink = () => {
    return `https://wa.me/${phoneNumber}`;
  };

  const constructMailtoLink = () => {
    return `mailto:${emailAddress}`;
  };

  return (
    <AnimationWrapper>
      <div className="contactContainer container flex mt-52 mb-10">
        <div className="contactMainTextContainer">
          <h1 className="contactMainText">Let&apos;s create together!.</h1>
        </div>
        <div className="contactBoxContainer">
          {/* ... rest of your code ... */}
        </div>
      </div>
    </AnimationWrapper>
  );
}

export default Contact;
