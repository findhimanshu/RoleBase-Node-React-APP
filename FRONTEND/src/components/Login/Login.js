import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3010/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then(async function (response) {
        let code = response.status;
        let data = await response.json();
        resolve({
          code: code,
          data: data,
        });
      })
      .catch((e) => reject(e));
  });
}

export default function Login({ setToken }) {
  const [userName, setUserName] = useState();
  const [passWord, setPassword] = useState();
  const [statusMessage, setStatusMessage] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({
      userName: userName,
      passWord: passWord,
    });

    if (response.code != 200) setStatusMessage(response.data.message);
    else {
      setToken(response.data.token);
      navigate("../dashboard", {
        replace: true,
      });
    }
  };

  const signUpHandler = (e) => {
    navigate("../signup", { replace: true });
  };
  return (
    <>
      <div className="card col-6">
        <label className="text-center">{statusMessage}</label>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example1">
                Enter Username
              </label>
              <input
                className="form-control"
                required
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
              <input
                className="form-control"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <div className="row text-center">
                <div className="col-12">
                  <button className="btn btn-primary btn-block" type="submit">
                    Login
                  </button>
                  <span className="m-2">OR</span>
                  <button
                    className="btn btn-success btn-block"
                    onClick={signUpHandler}
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
