import React, { useEffect } from 'react';
import ProgressData from './ProgressData';
import './progress.css'
import pic2 from '../../Assets/pic2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

function ProgressMain() {

    useEffect(()=>{
        Aos.init({duration:1500})
    },[])

    return (
        <>
            <div className="container-fluid main_div">
                <div className="container text-center pt-5 pb-5">
                    <span className='skills'>Skills</span>
                </div>
                <div className="container progress_container">
                <div className="row">
                    <div className="col-md-6">
                        <ProgressData/>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={pic2} alt="Hamza Siddique" className='pic2' data-aos='fade-left' />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default ProgressMain
