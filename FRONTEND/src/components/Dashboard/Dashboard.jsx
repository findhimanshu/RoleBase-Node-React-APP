import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useToken from "../../userToken";
import permissionMapper from "../../utils/permissionMapper";

async function getPermission(token) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3010/permissions", {
      method: "GET",
      headers: {
        token: token,
      },
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
export default function Dashboard() {
  const { token, setToken } = useToken();
  const [permissions, setPermissions] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

  let navigate = useNavigate();

  const buttonClickHandler = (e) => {
    const METHOD = permissionMapper[e.target.value];
    debugger;
    fetch("http://localhost:3010/products", {
      method: METHOD,
      headers: {
        token: token,
      },
    })
      .then(async function (response) {
        let data = await response.json();
        debugger;
        setStatusMessage(data.message);
      })
      .catch((e) => console.error(e));
  };

  const logoutHandler = (e) => {
    setToken(null);
  };

  useEffect(() => {
    async function fetchPermission(token) {
      let response = await getPermission(token);

      setPermissions(response.data.data);

      debugger;
      return response;
    }
    fetchPermission(token);
  }, []);

  useEffect(() => {
    if (!token) navigate("../login", { replace: true });
  }, [token]);

  return (
    <div className="card col-6">
      <div className="text-center">{statusMessage}</div>

      {permissions.map((perm) => (
        <button
          className="btn btn-primary btn-block m-2"
          key={perm}
          value={perm}
          onClick={buttonClickHandler}
        >
          {perm}
        </button>
      ))}
      <button className="btn btn-danger btn-block m-2" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
}
