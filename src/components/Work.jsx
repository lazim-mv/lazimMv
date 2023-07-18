import React from "react";
import AnimationWrapper from "./AnimationWrapper";

function Work() {
  return (
    <div className="workPhilosophy mt-52 text-center">
      <h5 className="workPhilosophyHeading">WORK PHILOSOPHY</h5>
      <h1 className="workPhilosophyDesc mt-14">
        &quot;Elevating usability is my
        <br /> goal, designing experiences that span generations&quot;
      </h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "70%" }}>
          <h5 className="expDecText text-2xl mt-4">
            Elevating usability is my goal, driven by a passion for creating
            designs that transcend generations and resonate universally.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Work;
