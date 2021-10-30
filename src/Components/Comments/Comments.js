import React, { useState, useEffect } from "react";
import "./comments.css";
import { db } from "../../firebase_config";
import { collection, addDoc } from "firebase/firestore";
import ShowComments from "./ShowComments";

function Comments() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const date = new Date().toLocaleDateString();
  

  const AddComments = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Comments"), {
        Name: name,
        Email: email,
        Comment: comments,
        Date: date
      });
      console.log("Comments added at", docRef.id);
    } catch (e) {
      console.log(e.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="container-fluid comments_wrapper">
        <div className="container text-center awards_wrapper">
          <span className="comments">Comments</span>
        </div>
        <div className="container">
          <form className="form-group">
            <label className="label_color">Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control input_field"
              required
            />{" "}
            <br />
            <label className="label_color">Email</label>
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control input_field"
              required
            />
            <br />
            <label className="label_color">Comments | Suggestions</label>
            <textarea
              placeholder="Enter Comments or Suggestions Here..."
              id=""
              cols="30"
              rows="8"
              className="form-control input_field"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            ></textarea>
            <br />
            <span className="com_btn" onClick={AddComments}>
              {loading ? "Adding Comment..." : "Add Comment"}
            </span>
          </form>
        </div>
        <br />
        <div className="container">
          <span className="com_head">All Comments:</span>
        </div>
        <div className="container">
          <ShowComments />
        </div>
      </div>
    </>
  );
}

export default Comments;
