"use client"
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import "./globals.css";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Experience from "@/components/Experience";
// import AnimationWrapper from "@/components/AnimationWrapper";
import Work from "@/components/Work";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
config.autoAddCss = false;

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <main>
        <div className="appContainer container m-auto">
          <Header />
          <Hero />
          <Experience />
          <Work />
          <Project/>
          <Contact/>
        </div>
      </main>
    </>
  );
};

export default Home;
