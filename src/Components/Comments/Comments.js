import React, { useState, useEffect } from "react";
import './comments.css'
import {db} from '../../firebase_config'
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    query,
    where,
  } from "firebase/firestore";


function Comments() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");


  

  return (
    <>
      <div className="container-fluid comments_wrapper">
      <div className="container text-center awards_wrapper">
          <span className="comments">Comments</span>
        </div>
        <div className="container">
          <form className="form-group">
              <label className='label_color'>Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control input_field"
            /> <br />
            <label className='label_color'>Email</label>
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control input_field"
            />
            <br />
            <label className='label_color'>Comments | Suggestions</label>
            <textarea
              placeholder="Enter Comments or Suggestions Here..."
              id=""
              cols="30"
              rows="10"
              className="form-control input_field"
              value={comments}
              onChange={(e)=>setComments(e.target.value)}
            ></textarea>
            <br />
            <span className='com_btn'>Add Comment</span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Comments;
