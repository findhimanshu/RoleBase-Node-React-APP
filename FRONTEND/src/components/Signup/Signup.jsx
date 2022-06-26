import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

async function addUser(credentials) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3010/signup", {
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

export default function Signup() {
  const [userName, setUserName] = useState();
  const [passWord, setPassword] = useState();
  const [role, setRole] = useState("ADMIN");
  const [statusMessage, setStatusMessage] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    const response = await addUser({
      userName: userName,
      passWord: passWord,
      role: role,
    });

    setUserName("");
    setPassword("");
    setStatusMessage(response.data.message);
  };
  const loginHandler = (e) => {
    navigate("../login", { replace: true });
  };

  return (
    <>
      <div className="card col-6">
        <form onSubmit={handleSubmit}>
          <div className="text-center">{statusMessage}</div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Enter Username
            </label>
            <input
              className="form-control"
              required
              value={userName}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Enter Password
            </label>
            <input
              required
              value={passWord}
              className="form-control"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group"></div>
          <label>Select Role</label>
          <select
            className="form-control"
            required
            name="role"
            id="role"
            defaultValue={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="ADMIN">ADMIN</option>
            <option value="SELLER">SELLER</option>
            <option value="SUPPORTER">SUPPORTER</option>
            <option value="CUSTOMER">CUSTOMER</option>
          </select>

          <div className="row text-center mt-3 mb-3">
            <div className="col-12">
              <button className="btn btn-primary btn-block" type="submit">
                Sign up
              </button>
              <span className="m-2">OR</span>
              <button
                className="btn btn-success btn-block"
                onClick={loginHandler}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
