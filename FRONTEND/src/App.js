import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import useToken from "./userToken";
import Signup from "./components/Signup/Signup";

function App() {
  const { token, setToken } = useToken();
  const [permissions, setPermisssions] = useState([]);

  const setUserPermission = (perm) => {
    setPermisssions(perm);
  };

  return (
    <div className="container row d-flex justify-content-center">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={
              <Login
                setUserPermission={setUserPermission}
                setToken={setToken}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
