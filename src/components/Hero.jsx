import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import myImage from "../../public/images/crop1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  const [isMobile, setIsmobile] = useState(false); // Initialize with false
  const [width, setWidth] = useState(0);

  function widthofScreen() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    widthofScreen();
    setIsmobile(width <= 600); // Update isMobile based on width
    console.log(width);
  }, []);

  const leftAnimation = {
    hidden: { opacity: 0, x: isMobile ? -300 : -300 },
    visible: { opacity: 1, x: 0, transition: { delay: 0, duration: 0.8 } },
  };

  const rightAnimation = {
    hidden: { opacity: 0, x: isMobile ? 300 : 300 },
    visible: { opacity: 1, x: 0, transition: { delay: 0, duration: 0.8 } },
  };

  const [leftRef, leftInView] = useInView({
    threshold: 0.1,
  });

  const [rightRef, rightInView] = useInView({
    threshold: 0.1,
  });

  return (
    <>
      <div
        id="home"
        className="container flex  gap-4 heroMainContainer pt-16 pl-32 pr-28"
      >
        <motion.div
          ref={leftRef}
          className="heroLeftContainer flex  flex-col "
          initial={leftInView ? "visible" : "hidden"}
          animate={leftInView ? "visible" : "hidden"}
          variants={leftAnimation}
        >
          <div className="heroLeftHeadingContainer">
            <h1 className="heroLeftHeadingText">UNLEASHING</h1>
            <h1 className="heroLeftHeadingText">INSPIRATION</h1>
          </div>
          <div className="videoContainer">
            <div className="videoWrapper">
              <video
                className="videoBackground pt-3"
                autoPlay
                loop
                muted
                loading="lazy"
              >
                <source src="/images/Welcome.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
        <div className="heroRightContainer flex  flex-col justify-end">
          <div className="heroRightImageContainer self-end">
            <Image src={myImage} width={320} height={320} alt="hh" quality={100}/>
          </div>
        </div>
      </div>
      <motion.div
        className="heroBottomContainer container flex justify-between pt-3 pl-32 pr-28"
        initial={rightAnimation.hidden}
        animate={rightAnimation.visible}
        exit={rightAnimation.hidden}
        transition={rightAnimation.visible.transition}
      >
        <div className="heroDownArrowContainer self-end">
          <a href="#project">
            <FontAwesomeIcon
              className="text-8xl"
              icon={faArrowDown}
              fade
              style={{ color: "#ededee" }}
            />
          </a>
        </div>
        <div className="heroShortDescContainer self-end">
          <p className="text-2xl heroDescText">
            Discover a world of
            <br /> captivating design,
            <br /> curated with passion
            <br /> and precision.
          </p>
          <motion.p
            ref={rightRef}
            className="text-2xl heroMobileDescText"
            // initial={rightInView ? "visible" : "hidden"}
            // animate={rightInView ? "visible" : "hidden"}
            // variants={rightAnimation}
          >
            Discover a world of captivating design, curated with passion and
            precision.
          </motion.p>
        </div>
        <motion.div
          ref={leftRef}
          className="heroRightHeadingContainer self-center pt-16"
          initial={rightInView ? "visible" : "hidden"}
          animate={rightInView ? "visible" : "hidden"}
          variants={rightAnimation}
        >
          <h1 className="text-7xl heroRightHeadingText">LAZIM</h1>
          <h1 className="text-7xl heroRightHeadingText">LATHEEF</h1>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hero;
