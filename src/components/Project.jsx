import React from "react";
import nex from "../../public/images/nex2.png";
import bmcGlobal from "../../public/images/bmcGlobal.png";
import bmcuae from "../../public/images/bmcuae.png";
import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";

function Project() {
  return (
    <>
      <div id="project" className="projectContianer container mt-52 ">
        <h5 className="workPhilosophyHeading text-center mb-14">PROJECT</h5>
        <p className="projectDesc mb-14">
          Our expertly crafted website seamlessly combines stunning web design
          and intuitive user experience, ensuring optimal responsiveness across
          all devices. Experience the perfect blend of aesthetic appeal and
          user-friendly functionality
        </p>
      </div>
      <div className="projectsWrapper">
        <AnimationWrapper>
          <div className="pCard1 flex mx-auto ">
            <div className="pTextContainer">
              <h3 className="cardTitle">NEXWAVE</h3>
              <p className="cardDesc">
                NEXWAVE IS A comprehensive WEBSITE THAT OFFERS services,
                including digital strategy, development, marketing, and
                designing
              </p>
              <div className="buttonContainer">
                <a
                  href="https://nexwave-may.vercel.app/"
                  className="button"
                  target="_blank"
                >
                  Preview
                </a>
              </div>
            </div>
            <div className="pImageContainer">
              <Image className="pImageNex" src={nex} alt="" />
            </div>
          </div>
        </AnimationWrapper>

        <AnimationWrapper>
          <div className="pCard1 flex mx-auto mt-20">
            <div className="pTextContainer">
              <h3 className="cardTitle">BEACON</h3>
              <p className="cardDesc">
                Beacon is a Management Consultants THAT OFFERS services
                including Business Incorporation,Financial & Accounting,
                Services Audit & Taxation
              </p>
              <div className="buttonContainer">
                <a
                  href="https://www.bmcglobal.co/"
                  className="button"
                  target="_blank"
                >
                  Preview
                </a>
              </div>
            </div>
            <div className="pImageContainer">
              <Image className="pImageNex" src={bmcGlobal} alt="" />
            </div>
          </div>
        </AnimationWrapper>

        <AnimationWrapper>
          <div className="pCard1 flex mx-auto mt-20">
            <div className="pTextContainer">
              <h3 className="cardTitle">BEACON UAE</h3>
              <p className="cardDesc">
                Beacon is a Management Consultants THAT OFFERS services
                including Business Incorporation,Financial & Accounting,
                Services Audit & Taxation
              </p>
              <div className="buttonContainer">
                <a
                  href="https://www.uae.bmcglobal.co/"
                  className="button"
                  target="_blank"
                >
                  Preview
                </a>
              </div>
            </div>
            <div className="pImageContainer">
              <Image className="pImageNex" src={bmcuae} alt="" />
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </>
  );
}

export default Project;
