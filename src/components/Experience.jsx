import React from "react";
import Image from "next/image";
import M2h from "../../public/images/m2h.png";
import Nexwave from "../../public/images/nexwave1.png";
import Procube from "../../public/images/ProCube.png";

function Experience() {
  return (
    <div className="expContainer flex flex-col container mt-52 mx-auto">
      <div className="expTextContainer text-center">
        <h5 className="workPhilosophyHeading">EXPERIENCE</h5>
        <h1 className="expHeadingText mt-14">COMPANIES WHERE I HAVE WORKED</h1>
        <p className="expDecText">
          I have 1+ years experience working both as an intern as well as a
          freelance designer.
        </p>
      </div>
      <div className="logoContainer flex self-center items-center gap-28 mt-14">
        <div className="logo2">
          <Image src={Nexwave} width={383} height={55} alt="nexwave" />
        </div>
        <div className="logo1">
          <Image className="m2hLogo" src={M2h} width={90} height={100} alt="m2h"/>
        </div>
        <div className="logo3">
          <Image src={Procube} width={383} height={130} alt="Procube"/>
        </div>
      </div>

      <div className="workPhilosophy mt-52 text-center">
        <h5 className="workPhilosophyHeading">WORK PHILOSOPHY</h5>
        <h1 className="workPhilosophyDesc mt-14">
          "Elevating usability is my
          <br /> goal, designing experiences
           that span generations"
        </h1>

        <div style={{width:"100%",display:"flex", justifyContent:"center"}}>
          <div style={{width:"70%"}}>
            <h5 className="expDecText text-2xl mt-4">
              Elevating usability is my goal, driven by a passion for creating
              designs that transcend generations and resonate universally.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
