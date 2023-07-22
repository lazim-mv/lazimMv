"use client";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      className="headerList container flex justify-around items-center h-20 shadow-lg shadow-blue-950"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      exist={{ opacity: 0, y: -200 }}
      transition={{ delay: 0.1, duration: 0.55 }}
    >
      <h6 className="text-2xl hover:text-sky-700 cursor-pointer">HOME</h6>
      <h6 className="text-2xl hover:text-sky-700 cursor-pointer">PROJECT</h6>
      <h6 className="text-2xl hover:text-sky-700 cursor-pointer">ABOUT</h6>
      <h6 className="text-2xl hover:text-sky-700 cursor-pointer">CONTACT</h6>
    </motion.div>
  );
}

export default Header;
