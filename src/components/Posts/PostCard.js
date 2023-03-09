import React from "react";

const PostCard = (props) => {
  const { title, body } = props.post;
  return (
    <div className="col">
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
        <div className="card-header">{title}</div>
        <div className="card-body">{body}</div>
      </div>
    </div>

    // <div
    //   className="card mx-md-3 d-inline-block"
    //   style={{
    //     marginTop: "2vh",
    //     width: "30%",
    //     height: "30vh",
    //     marginLeft: "2vh",
    //     backgroundColor: "#101010",
    //     color: "white"
    //   }}
    // >
    //   <div className="card-body">
    //     <div className="card-title">{title}</div>
    //     <p className="card-text">{body}</p>
    //   </div>
    // </div>
  );
};

export default PostCard;
