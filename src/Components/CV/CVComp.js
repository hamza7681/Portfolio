import React from "react";
import "./cv.css";

function CVComp() {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="container cv_wrapper">
          <span className="cv">Curriculum Vitae</span>
        </div>
        <div className="container pb-5">
          <iframe
            src="https://drive.google.com/file/d/1ASEkrA2i6Bfoxuk8qYyIGgFinKNOGiLF/preview"
            allow="autoplay"
            className="cv_form"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default CVComp;
