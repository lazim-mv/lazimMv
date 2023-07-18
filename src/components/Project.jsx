import React from "react";
import nex from "../../public/images/nex2.png";
import proc from "../../public/images/proWeb.png";
import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";

function Project() {
  return (
      <div className="projectContianer container mt-52 mb-52 ">
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
              <button className="button">Preview</button>
            </div>
          </div>
          <div className="pImageContainer">
            <Image className="pImageNex" src={nex} alt="" />
          </div>
        </div>
    </AnimationWrapper>

    <AnimationWrapper>
        <div className="pCard1 flex mx-auto mt-16">
          <div className="pTextContainer">
            <h3>
              Our expertly crafted website seamlessly combines stunning web
              design and intuitive user experience, ensuring optimal
              responsiveness across all devices. Experience the perfect blend of
              aesthetic appeal and user-friendly functionality
            </h3>
            <div className="buttonContainer">
              <button className="button">Preview</button>
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
