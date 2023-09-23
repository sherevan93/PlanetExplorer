
import React, { useState, useEffect } from "react";
import login from "../../assets/images/planet2.jpg";
import "../../assets/css/login.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { usersData } from "./users";

var username = "";
var data = "";
const Login = (props) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    data = usersData;
    console.log(usersData);
  }, []);

  function handleSubmit(event) {
    if (
      data.find((element) => element.email === email) &&
      data.find((element) => element.password === password)
    ) {
      let loginUser = data.filter((element) => element.email === email);
      let path = `/planets`;
      history.push(path);
      props.setUserName(loginUser[0].username);
    } else {
      event.preventDefault();
    }
  }

  return (
    <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src={login} alt="login" className="login-card-img" />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <p className="login-card-description">Sign into your account</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      id="email"
                      className="form-control"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      id="password"
                      className="form-control"
                      placeholder="***********"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <input
                    name="login"
                    id="login"
                    className="btn btn-block login-btn mb-4"
                    type="submit"
                    value="Login"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (username) => {
      dispatch({ type: "LOGIN", payload: username });
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
