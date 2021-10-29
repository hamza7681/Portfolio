import React from "react";
import "./work.css";
import { FaExternalLinkAlt } from "react-icons/all";

function WebCards({ src, link }) {
  return (
    <>
      <div className="container-fluid pt-5 pb-5">
        <div className="first_div">
          <img src={src} alt="Hamza Siddique" className="webpic" />
          <div className="sub_div">
            <a href={link} target="_blank" className="card_link">
              Visit... <FaExternalLinkAlt className="card_icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebCards;
