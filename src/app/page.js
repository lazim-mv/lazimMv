import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import "./globals.css";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Experience from "@/components/Experience";
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
          <Experience/>
        </div>
      </main>
    </>
  );
};

export default Home;
