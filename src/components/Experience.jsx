import React, { useState, useEffect } from "react";
import Image from "next/image";
import M2h from "../../public/images/m2h.png";
import Nexwave from "../../public/images/nexwave1.png";
import Procube from "../../public/images/ProCube.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1, // Define the percentage of the element's visibility before triggering the animation
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const variants = {
    // Bounce animation when in view
    // visible: { y: 0, transition: { duration: 1, type: "spring", damping: 8, stiffness: 2000 } }, 
    // Height of bounce
    // hidden: { y: 100 }, 
  };

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
      <div ref={ref} className="logoContainer flex self-center items-center gap-28 mt-14">
        <motion.div
          animate={isVisible ? "visible" : "hidden"} // Use the 'visible' variant when in view, otherwise 'hidden'
          variants={variants}
          transition={{duration:0.8}}
        >
          <Image src={Nexwave} width={383} height={55} alt="nexwave" />
        </motion.div>
        <motion.div
          animate={isVisible ? "visible" : "hidden"} // Use the 'visible' variant when in view, otherwise 'hidden'
          variants={variants}
          transition={{duration:0.8}}
        >
          <Image className="m2hLogo" src={M2h} alt="m2h" />
        </motion.div>
        <motion.div
          animate={isVisible ? "visible" : "hidden"} // Use the 'visible' variant when in view, otherwise 'hidden'
          variants={variants}
          transition={{duration:0.8}}
        >
          <Image src={Procube} width={383} height={130} alt="Procube" />
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
