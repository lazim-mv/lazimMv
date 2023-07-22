import React from "react";
import nex from "../../public/images/nex2.png";
import proc from "../../public/images/proWeb.png";
import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";

function Project() {
  return (
    <>
      <div className="projectContianer container mt-52 ">
        <h5 className="workPhilosophyHeading text-center mb-14">PROJECT</h5>
        <p className="projectDesc mb-16">
          Our expertly crafted website seamlessly combines stunning web design
          and intuitive user experience, ensuring optimal responsiveness across
          all devices. Experience the perfect blend of aesthetic appeal and
          user-friendly functionality
        </p>
      </div>
      <AnimationWrapper>
        <div className="pCard1 flex mx-auto ">
          <div className="pTextContainer">
            <h3 className="cardTitle">NEXWAVE</h3>
            <p className="cardDesc">
            NEXWAVE IS A comprehensive WEBSITE THAT OFFERS services, including
              digital strategy, development, marketing, and designing
            </p>
            <div className="buttonContainer">
              <a href="https://www.nexwave.cx/" className="button">
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
          <h3 className="cardTitle">PROCUBE</h3>
            <p className="cardDesc">
              PROCUBE IS A comprehensive WEBSITE THAT OFFERS services, including
              digital strategy, development, marketing, and designing
            </p>
            <div className="buttonContainer">
              <a href="https://procube.cx/" className="button">
                Preview
              </a>
            </div>
          </div>
          <div className="pImageContainer">
            <Image className="pImageNex" src={proc} alt="" />
          </div>
        </div>
      </AnimationWrapper>
    </>
  );
}

export default Project;
