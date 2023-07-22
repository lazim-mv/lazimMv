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
      <h1 className="workMobilePhilosophyDesc mt-14">
        &quot;Elevating usability is my goal, designing experiences that span
        generations&quot;
      </h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="workDescContainer">
          <h5 className="expDecText text-2xl mt-4">
            Consciously looking for those moments, internalizing them and
            learning from them gets me excited in a way that I just need to do
            this for the rest of my life.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Work;
