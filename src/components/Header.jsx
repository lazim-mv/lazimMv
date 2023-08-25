"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";

const menuVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, duration: 1 },
  left: { x: -150, opacity: 0 },
  right: { x: 150, opacity: 0 },
};

const hamburgerVariants = {
  open: { rotate: 90 },
  closed: { rotate: 0 },
};

const iconVariants = {
  rotating: {
    rotate: 360,
    transition: {
      duration: 0.4,
      ease: "linear",
    },
  },
};

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const hamBurgerRef = useRef(null);
  const mobileMenuListRef = useRef(null);
  const [isIconRotating, setIconRotating] = useState(false); // State to manage the rotation animation

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuListRef.current &&
      !mobileMenuListRef.current.contains(event.target) &&
      event.target !== hamBurgerRef.current
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    if (isIconRotating) {
      setTimeout(() => {
        setIconRotating(false);
      }, 1000); // Wait for 1 second (duration of the animation) and then reset the rotation state
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, isIconRotating]);

  const handleDownloadResume = () => {
    setIconRotating(true);
    const resumeFilePath = "/images/LazimLatheef.pdf";
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.download = "MohammedLazimLatheef.pdf";
    link.click();
  };

  return (
    <>
      <motion.div
        className="headerList container flex justify-around items-center h-20 shadow-lg shadow-blue-950"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ delay: 0.1, duration: 0.55 }}
      >
        <h6 className="text-2xl hover:text-sky-700 cursor-pointer">HOME</h6>
        <h6 className="text-2xl hover:text-sky-700 cursor-pointer">PROJECT</h6>
        <h6 className="text-2xl hover:text-sky-700 cursor-pointer">ABOUT</h6>
        <h6 className="text-2xl hover:text-sky-700 cursor-pointer">CONTACT</h6>
        <div className="resume">
        <h6 className="text-2xl hover:text-sky-700 cursor-pointer">RESUME</h6>
          <motion.div
            className="iconDownload"
            onClick={handleDownloadResume}
            animate={isIconRotating ? "rotating" : "static"}
            variants={iconVariants}
          >
            <FontAwesomeIcon icon={faDownload} />
          </motion.div>
        </div>
      </motion.div>
      <div className="mobileHeader container flex items-center h-20 shadow-lg shadow-blue-950">
        <div className="resume">
          <h3 className="text-4xl">RESUME</h3>
          <motion.div
            className="iconDownload"
            onClick={handleDownloadResume}
            animate={isIconRotating ? "rotating" : "static"}
            variants={iconVariants}
          >
            <FontAwesomeIcon icon={faDownload} />
          </motion.div>
        </div>
        <div className="hamBurgerContainer">
          <motion.div
            className="hamBurger"
            onClick={toggleMenu}
            ref={hamBurgerRef}
            variants={hamburgerVariants}
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
          >
            <FontAwesomeIcon icon={faBars} />
          </motion.div>
          <motion.div
            className="mobileMenuList shadow-lg shadow-blue-950"
            style={{ display: isMenuOpen ? "flex" : "none" }}
            ref={mobileMenuListRef}
            variants={menuVariants}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            exit="hidden"
            transition={{ duration: 0.4 }}
          >
            <a href="#home" className="text-3xl">HOME</a>
            <a href="#project" className="text-3xl">PROJECT</a>
            <a href= "#experience"className="text-3xl">ABOUT</a>
            <a href="#contact" className="text-3xl">CONTACT</a>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Header;
