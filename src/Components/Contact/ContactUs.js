import React from "react";
import {
  FaFacebook,
  SiGmail,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/all";
import './contact.css';

function ContactUs() {

  
  return (
    <>
      <div className="container-fluid">
        <div className="container main_wrapper mb-5">
          <div className="container pt-5 pb-4">
            <h2 className='contact_heading'>Contact Details:</h2>
          </div>
<div className="container pb-5">
          <ul className='contact_list' >
            <li>
              <span className='gmail mr-5'>
                <SiGmail />
              </span>
              <span className='gmail_content'>hamzambf@gmail.com</span>
            </li>
            <li>
              <span className='whatsapp mr-5'>
                <FaWhatsapp />
              </span>
              <span className='whatsapp_content'>
                <a href="https://wa.link/hhraz2" target="_blank">
                  +92-311-7110211
                </a>
              </span>
            </li>
            <li>
              <span className='facebook mr-5'>
                <FaFacebook />
              </span>
              <span className='facebook_content'>
                <a
                  href="https://www.facebook.com/itz.mughal.10/"
                  target="_blank"
                >
                 Facebook (Hámzà Mûghàl)
                </a>
              </span>
            </li>
            <li>
              <span className='linkedin mr-5'>
                <FaLinkedin />
              </span>
              <span className='linkedin_content'>
                <a
                  href="https://www.linkedin.com/in/hamza-siddique-b90253130/"
                  target="_blank"
                >
                  LinkedIn (Hamza Siddique)
                </a>
              </span>
            </li>
            <li>
              <span className='github mr-5'>
                <FaGithub />
              </span>
              <span className='github_content'>
              <a href="https://github.com/hamza7681" target="_blank">
                https://github.com/hamza7681
              </a>
              </span>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
