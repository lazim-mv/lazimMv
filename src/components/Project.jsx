import React from "react";
import nex from "../../public/images/nex2.png";
import proc from "../../public/images/proWeb.png";
import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";

function Project() {
  return (
    <div className="projectContianer container mt-52 ">
      <h5 className="workPhilosophyHeading text-center mb-16">PROJECT</h5>
      <AnimationWrapper>
        <div className="pCard1 flex mx-auto">
          <div className="pTextContainer">
            <h3>
              Our expertly crafted website seamlessly combines stunning web
              design and intuitive user experience, ensuring optimal
              responsiveness across all devices. Experience the perfect blend of
              aesthetic appeal and user-friendly functionality
            </h3>
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
            <h3>
              Our expertly crafted website seamlessly combines stunning web
              design and intuitive user experience, ensuring optimal
              responsiveness across all devices. Experience the perfect blend of
              aesthetic appeal and user-friendly functionality
            </h3>
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
    </div>
  );
}

export default Project;
