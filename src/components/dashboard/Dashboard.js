import React from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth } from "../../customUtils/Config";

function Dashboard() {
  const navigate = useNavigate();


  const routeRegister = () => {
    navigate("/register");
  };

  const routeLogin = () => {
    navigate("/login");
  };
  const routePost = () => {
    navigate("/posts");
  };

  const routeChange = () => {
    navigate("/tabledata");
  };

  const routeUser = () => {
    navigate("/user");
  };

  const routeComment = () => {
    navigate("/comment");
  };

  const routePicture = () => {
      navigate("/photos")
  };

  const routeAlbum = () => {
      navigate("/albums")
  };

  return (
    <>
      {!useAuth() ? (
        <div className="header">
          <Button style={{ color: "white" }} onClick={routeRegister}>
            REGISTER
          </Button>
          <Button style={{ color: "white" }} onClick={routeLogin}>
            LOGIN
          </Button>
        </div>
      ) : (
        <div className="header">
          <Button style={{ color: "white" }} onClick={routeUser}>
            USER
          </Button>
          <Button style={{ color: "white" }} onClick={routePost}>
            POSTS
          </Button>
          <Button style={{ color: "white" }} onClick={routeChange}>
            TABLE
          </Button>
          <Button style={{ color: "white" }} onClick={routeComment}>
            COMMENTS
          </Button>
          <Button style={{ color:"white"}} onClick={routePicture}>
              PHOTOS
          </Button>
          <Button style={{color:"white"}} onClick={routeAlbum}>
              ALBUMS
          </Button>
        </div>
      )}
    </>
  );
}

export default Dashboard;
