import React,{useEffect} from 'react';
import './github.css'
import {FaGithub} from 'react-icons/all'
import Aos from "aos";
import "aos/dist/aos.css";

function Github() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
    
    return (
        <>
            <div className="container-fluid github_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                        <h5>   Have a Free Time? Check my Github Repositories...</h5>
                        </div>
                        <div className="col-md-6 text-center">
                            <span className='github_link' data-aos='fade-up'><a href="https://github.com/hamza7681" target='_blank' > <FaGithub className='github_btn'/> Github</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Github
