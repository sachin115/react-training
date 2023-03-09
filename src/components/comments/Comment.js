import axios from "axios";
import React, { useEffect, useState } from "react";
import Constants from "../../customUtils/Config";

const Comment = () => {
  const [data, setData] = useState([]);
  const CommentData = async () => {
    let response = await axios.get(Constants.BASE_URL + "/comments");
    setData(response.data);
  };

  useEffect(() => {
    CommentData();
  }, []);

  return (
    <div>
      {data.map((comment) => {
        return (
          <div
            className="card mx-md-3 d-inline-block"
            style={{
              color: "white",
              backgroundColor: "#101010",
              width: "30%",
              marginTop: "2vh",
              marginLeft: "2vh",
            }}
          >
            <div className="card-header">{comment.name}</div>
            <div className="card-body">
              <p className="card-text">{comment.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
