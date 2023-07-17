import React from "react";
import "../app/globals.css";
import Image from "next/image";
import myImage from "../../public/images/Lazim.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faTrash } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <>
      <div className="container flex  gap-4 heroMainContainer pt-8 pl-32 pr-28">
        <div className="heroLeftContainer flex flex-1 flex-col ">
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
        </div>
        <div className="heroRightContainer flex flex-1 flex-col justify-end">
          <div className="heroRightImageContainer self-end">
            <Image src={myImage} width={320} height={320} alt="" />
          </div>
        </div>
      </div>
      <div className="heroBottomContainer container flex justify-between pt-3 pl-32 pr-28">
        <div className="heroDownArrowContainer self-end">
          <FontAwesomeIcon className="text-8xl" icon={faArrowDown} fade style={{color: "#ededee",}} />
        </div>
        <div className="heroShortDescContainer self-end">
          <p className="text-2xl heroDescText">Discover a world of<br/> captivating design,<br/> curated with passion<br/> and precision.</p>
        </div>
        <div className="heroRightHeadingContainer self-center pt-8">
          <h1 className="text-7xl heroRightHeadingText">LAZIM</h1>
          <h1 className="text-7xl heroRightHeadingText">LATHEEF</h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
