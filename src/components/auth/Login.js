import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function LoginUser(e) {
    e.preventDefault();
    try {
      let response = await axios.post(
        "https://mkart-frontend.herokuapp.com/api/v1/auth/login",
        {
          username,
          password,
        }
      );
      console.log(response);
      if (response.data.success) {
        localStorage.setItem("accessToken", response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ marginTop: "10vh", marginLeft: "70vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div
              className="card"
              style={{ textAlign: "center", width: "70%", height: "40vh" }}
            >
              <div
                className="card-header"
                style={{ backgroundColor: "#101010", color: "white" }}
              >
                <h5 className="card-title">USER LOGIN</h5>
              </div>
              <div className="card-body">
                <form>
                  <input
                    type="text"
                    placeholder="user name"
                    className="form-control-mb3"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ marginTop: "2vh" }}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="password"
                    className="form-control-mb3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginTop: "2vh" }}
                  />
                  <br />
                  <br />
                  <button
                    onClick={(e) => LoginUser(e)}
                    style={{
                      marginTop: "2vh",
                      color: "#ffffff",
                      backgroundColor: "#101010",
                    }}
                  >
                    Login User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
