import React, { useEffect, useState } from "react";
import "./comments.css";
import { db } from "../../firebase_config";
import { collection, getDocs } from "firebase/firestore";
import { FaUserCircle } from "react-icons/all";
import Aos from "aos";
import "aos/dist/aos.css";

function ShowComments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "Comments"));
    let commentData = [];
    querySnapshot.forEach((com) => {
      let comment = com.data();
      comment.id = com.id;
      commentData.push(comment);
    });
    setData(commentData);
    setLoading(false);
    console.log(commentData);
  }, []);

  return (
    <div
      className="container-fluid text-center show_comments_wrapper"
      data-aos="fade-up"
    >
      {loading ? (
        <p>Loading Your Comments...</p>
      ) : (
        <div>
          {data.map((docs) => {
            return (
              <ul className="com_list">
                <li>
                  <span className="com_icon">
                    
                    --- <FaUserCircle />
                  </span>
                  <span className="com_name">{docs.Name} ---</span> <br />
                  <span className="com_email">
                    <i>{docs.Email}</i>
                  </span>
                  <br />
                  <br />
                  <span className="com_data">"{docs.Comment}"</span> <br />
                  <br />
                  <span className="com_date">
                    <i>--- {docs.Date} ---</i>
                  </span>
                  <hr />
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ShowComments;
