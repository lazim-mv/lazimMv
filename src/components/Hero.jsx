"use client";
import React from "react";
import "../app/globals.css";
import Image from "next/image";
import myImage from "../../public/images/Lazim.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className="container flex  gap-4 heroMainContainer pt-8 pl-32 pr-28">
        <motion.div
          className="heroLeftContainer flex flex-1 flex-col "
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          exist={{ opacity: 0, x: -150 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="heroLeftHeadingContainer">
            <h1 className="heroLeftHeadingText">UNLEASHING</h1>
            <h1 className="heroLeftHeadingText">INSPIRATION</h1>
          </div>
          <div className="videoContainer">
            <div className="videoWrapper">
              <video className="videoBackground pt-3" autoPlay loop muted>
                <source src="/images/heroInspire.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="heroRightContainer flex flex-1 flex-col justify-end"
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exist={{ opacity: 0, x: 150 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="heroRightImageContainer self-end">
            <Image src={myImage} width={320} height={320} alt="" />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="heroBottomContainer container flex justify-between pt-3 pl-32 pr-28"
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        exist={{ opacity: 0, y: 150 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
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
        </div>
        <div className="heroRightHeadingContainer self-center pt-8">
          <h1 className="text-7xl heroRightHeadingText">LAZIM</h1>
          <h1 className="text-7xl heroRightHeadingText">LATHEEF</h1>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
