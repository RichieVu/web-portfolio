import React, { useState, useEffect } from "react";
import WebPlayback from "./webplayback";
import Login from "./login";
import "./App.css";

function Jamtop() {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const response = await fetch("/auth/token");
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, []);

  return <>{token === "" ? <Login /> : <WebPlayback token={token} />}</>;
}