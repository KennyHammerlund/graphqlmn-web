import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlack,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="flex h-36 bg-blue-400 w-full justify-end">
      <h5 className="w-1/6 self-center text-center font-extrabold text-2xl text-white">
        Follow Us On
      </h5>
      <ul className="flex w-1/6 justify-evenly self-center">
        <li>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faSlack} size="3x" />
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
