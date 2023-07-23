import Head from "next/head";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJava,
  faJs,
  faCss3,
  faBootstrap,
  faReact,
  faAngular,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <>
      <div className="skillsContainer mt-52">
        {/* <h5 className="workPhilosophyHeading mb-14 text-center">SKILLS</h5> */}
        <div className="skillCircle shadow-md shadow-zinc-200">
          <div className="flex flex-col">
            <p className="skillsText">SKILLS&nbsp;AND&nbsp;TOOLS</p>
            <p className="mobileSkillsText">TAP HERE</p>
          </div>
          <ul className="skillsIcon">
            <li>
              <FontAwesomeIcon
                icon={faHtml5}
                className="shadow-md shadow-orange-300 fab fa-html5"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faJava}
                className="shadow-md shadow-orange-300 fab fa-java"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faJs}
                className="shadow-md shadow-orange-300 fab fa-js"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCss3}
                className="shadow-md shadow-orange-300 fab fa-css3"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faBootstrap}
                className="shadow-md shadow-orange-300 fab fa-bootstrap"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faDatabase}
                className="shadow-md shadow-orange-300 fab fa-database"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faReact}
                className="shadow-md shadow-orange-300 fab fa-react"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faAngular}
                className="shadow-md shadow-orange-300 fab fa-angular"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faNodeJs}
                className="shadow-md shadow-orange-300 fab fa-node-js"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPython}
                className="shadow-md shadow-orange-300 fab fa-node-js"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
