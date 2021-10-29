import React from "react";
import './intro.css'
import pic1 from '../../Assets/pic1.png'

function Introduction() {
  return (
    <>
      <div className="container-fluid">
        <div className="container main_intro">
          <div className="row">
          <div className="col-md-6 text-center pt-5 pb-5">
                    <img src={pic1} alt="Hamza Siddique"  className='pic1' />
            </div>
            <div className="col-md-6 pt-5 pb-5">
              <h1 className='intro_heading'> Welcome to All Visitors </h1>
              <h4 className='intro_para'>
                I am Hamza Siddique - <span className='intro_string'>Front - End Developer & ReactJs Developer</span>. I can create
                Attractive, Creative and Mobile friendly Responsive Web Designs
                and Web Apps. Here's my Work
              </h4>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
