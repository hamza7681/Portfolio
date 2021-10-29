import React,{useEffect} from "react";
import "./work.css";
import WebCards from "./WebCards";
import web1 from "../../Assets/web1.png";
import web2 from "../../Assets/web2.png";
import web3 from "../../Assets/web3.png";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Work() {

  useEffect(()=>{
    Aos.init({duration:1000})
},[])

  return (
    <>
      <div className="container-fluid pt-5 pb-5 main_work">
        <div className="container text-center work_heading">
          <span className="work">Work & Experience</span>
        </div>
        <div className="container work_main_div" data-aos='slide-up'>
          <p className="work_para">
            I am a Web Developer specializing in front end development.
            Experienced with Front End development formalities. Well-versed in
            numerous programming languages including HTML5, CSS, JavaScript,
            Bootstrap and ReactJS. I have also worked in
            <b> Firebase v9 (Updated Version with New Syntax) </b> and little
            bit work with <b> Redux</b>. <br /> Following are my Works and click
            on Photos to visit my Demo Web Apps...
          </p>
          <br />
          <ul className="work_list">
            <li>
              <span className="Apps"> OLX Web App Clone </span> using ReactJs
              and Firebase v9 with <b> Firestore and Authentication </b>.
            </li>
            <li>
              <span className="Apps"> Todo Web App </span> using ReactJs and
              Firebase v9 with <b> Firestore and Authentication</b>.
            </li>
            <li>
              Developed Website for
              <span className="Apps">
                Developer Student Clubs - University of Agriculture Faisalabad
                (DSC-UAF)
              </span>
              powered by Google Developers in <b>ReactJs</b>.
            </li>
            <li>
              Developed <span className="Apps">Website Clone of NTU-FSD </span>
              in ReactJs in <b>Niofox Software House</b> - NTU Faisalabad
            </li>
            <li>
              Work on given templates as a fresh candidate in
              <b> Step-Up IT Solutions Faisalabad</b> as a Front End Developer
              Internee.
            </li>
            <li>
              Work as a Front End Internee in <b> MicroStarX Software House </b>
              and work on given templates
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-1 pb-1"  data-aos='zoom-in'>
              <WebCards
                src={web1}
                link="https://dsc-uaf-react-app.herokuapp.com"
                
              />
            </div>
            <div className="col-md-4 pt-1 pb-1"  data-aos='zoom-in'>
              <WebCards src={web2} link="https://ntu-react-app.herokuapp.com" />
            </div>
            <div className="col-md-4 pt-1 pb-1"  data-aos='zoom-in'>
              <WebCards
                src={web3}
                link="https://olx-clone1-app.herokuapp.com"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
