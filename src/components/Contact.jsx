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
        <h1 className="contactMainText">Let's create together!.</h1>
      </div>
      <div className="contactBoxContainer">
        <div className="videoContainer1">
          <div className="videoWrapper1">
            <video className="videoBackground1 pt-3" autoPlay loop muted>
              <source src="/images/contactVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="mail ">
          <div className="buttonContainer btnContainer">
            <a href={constructMailtoLink()} className="button btn">
              Say hy
            </a>
          </div>
        </div>
        <div className="socialContainer flex flex-col justify-start">
          <div className="social flex">
            <a
              href="https://www.instagram.com/lazim_mv/"
              className="socialIcon instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/lazim-mv-/"
              className="socialIcon linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/lazim-mv" className="socialIcon github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={constructWhatsAppLink()} className="socialIcon whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </AnimationWrapper>
  );
}

export default Contact;
