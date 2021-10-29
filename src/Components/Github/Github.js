import React from 'react';
import './github.css'
import {FaGithub} from 'react-icons/all'

function Github() {
    return (
        <>
            <div className="container-fluid github_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                        <h5>   Have a Free Time? Check my Github Repositories...</h5>
                        </div>
                        <div className="col-md-6 text-center">
                            <span className='github_link'><a href="https://github.com/hamza7681" target='_blank'> <FaGithub className='github_btn'/> Github</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Github
