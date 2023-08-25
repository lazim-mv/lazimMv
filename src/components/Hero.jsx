"use client";
import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import myImage from "../../public/images/mySelf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import AnimationWrapper from "./AnimationWrapper";
import HeroAnimationWrapper from "./HeroAnimationWrapper";

function Hero() {
  const [web, setWeb] = useState(false);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    setWeb(isMobile);
  }, []);

  const leftAnimation = {
    initial: { opacity: 0, x: isMobile ? -300 : 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isMobile ? -300 : 0 },
    transition: { delay: 0, duration: 0.5 },
  };

  const rightAnimation = {
    initial: { opacity: 0, x: isMobile ? 300 : 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isMobile ? 300 : 0 },
    transition: { delay: 0, duration: 0.5 },
  };

  const headingAnimation = {
    initial: { opacity: 0, x: isMobile ? -150 : 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isMobile ? -150 : 0 },
    transition: { delay: 0.3, duration: 0.5 },
  };
  return (
    <>
      {web ? (
        <HeroAnimationWrapper>
          <div
            id="home"
            className="container flex  gap-4 heroMainContainer pt-8 pl-32 pr-28"
          >
            <motion.div
              className="heroLeftContainer flex  flex-col "
              initial={leftAnimation.initial}
              animate={leftAnimation.animate}
              exit={leftAnimation.exit}
              transition={leftAnimation.transition}
            >
              <div className="heroLeftHeadingContainer">
                <h1 className="heroLeftHeadingText">UNLEASHING</h1>
                <h1 className="heroLeftHeadingText">INSPIRATION</h1>
              </div>
              <div className="videoContainer">
                <div className="videoWrapper">
                  <video className="videoBackground pt-3" autoPlay loop muted>
                    <source src="/images/Welcome.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="heroRightContainer flex  flex-col justify-end"
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              exist={{ opacity: 0, x: 150 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="heroRightImageContainer self-end">
                <Image src={myImage} width={320} height={320} alt="" />
              </div>
            </motion.div>
          </div>
          <motion.div className="heroBottomContainer container flex justify-between pt-3 pl-32 pr-28">
            <div className="heroDownArrowContainer self-end">
              <FontAwesomeIcon
                className="text-8xl"
                icon={faArrowDown}
                fade
                style={{ color: "#ededee" }}
              />
            </div>
            <div className="heroShortDescContainer self-end">
              <p className="text-2xl heroDescText">
                Discover a world of
                <br /> captivating design,
                <br /> curated with passion
                <br /> and precision.
              </p>
              <motion.p
                className="text-2xl heroMobileDescText"
                initial={rightAnimation.initial}
                animate={rightAnimation.animate}
                exist={rightAnimation.exit}
                transition={rightAnimation.transition}
              >
                Discover a world of captivating design, curated with passion and
                precision.
              </motion.p>
            </div>
            <motion.div
              className="heroRightHeadingContainer self-center pt-8"
              initial={leftAnimation.initial}
              animate={leftAnimation.animate}
              exist={leftAnimation.exit}
              transition={leftAnimation.transition}
            >
              <h1 className="text-7xl heroRightHeadingText">LAZIM</h1>
              <h1 className="text-7xl heroRightHeadingText">LATHEEF</h1>
            </motion.div>
          </motion.div>
        </HeroAnimationWrapper>
      ) : (
        <AnimationWrapper>
          <div
            id="home"
            className="container flex  gap-4 heroMainContainer pt-8 pl-32 pr-28"
          >
            <motion.div
              className="heroLeftContainer flex  flex-col "
              // initial={leftAnimation.initial}
              // animate={leftAnimation.animate}
              // exit={leftAnimation.exit}
              // transition={leftAnimation.transition}
            >
              <div className="heroLeftHeadingContainer">
                <h1 className="heroLeftHeadingText">UNLEASHING</h1>
                <h1 className="heroLeftHeadingText">INSPIRATION</h1>
              </div>
              <div className="videoContainer">
                <div className="videoWrapper">
                  <video className="videoBackground pt-3" autoPlay loop muted>
                    <source src="/images/Welcome.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="heroRightContainer flex  flex-col justify-end"
              // initial={{ opacity: 0, x: 150 }}
              // animate={{ opacity: 1, x: 0 }}
              // exist={{ opacity: 0, x: 150 }}
              // transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="heroRightImageContainer self-end">
                <Image src={myImage} width={320} height={320} alt="" />
              </div>
            </motion.div>
          </div>
          <motion.div className="heroBottomContainer container flex justify-between pt-3 pl-32 pr-28">
            <div className="heroDownArrowContainer self-end">
              <FontAwesomeIcon
                className="text-8xl"
                icon={faArrowDown}
                fade
                style={{ color: "#ededee" }}
              />
            </div>
            <div className="heroShortDescContainer self-end">
              <p className="text-2xl heroDescText">
                Discover a world of
                <br /> captivating design,
                <br /> curated with passion
                <br /> and precision.
              </p>
              <motion.p
                className="text-2xl heroMobileDescText"
                // initial={rightAnimation.initial}
                // animate={rightAnimation.animate}
                // exist={rightAnimation.exit}
                // transition={rightAnimation.transition}
              >
                Discover a world of captivating design, curated with passion and
                precision.
              </motion.p>
            </div>
            <motion.div
              className="heroRightHeadingContainer self-center pt-8"
              initial={leftAnimation.initial}
              animate={leftAnimation.animate}
              exist={leftAnimation.exit}
              transition={leftAnimation.transition}
            >
              <h1 className="text-7xl heroRightHeadingText">LAZIM</h1>
              <h1 className="text-7xl heroRightHeadingText">LATHEEF</h1>
            </motion.div>
          </motion.div>
        </AnimationWrapper>
      )}
    </>
  );
}

export default Hero;
