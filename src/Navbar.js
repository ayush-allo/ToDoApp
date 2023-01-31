import React from "react";
import { useState } from "react";
export default function Navbar(props) {
  const [mode, setMode] = useState("btn btn-light");
  const [modetxt, setModetxt] = useState("light_mode");
  const changeMode = () => {
    if (modetxt === "dark_mode") {
      setMode("btn btn-light");
      setModetxt("light_mode");
      document.body.style.backgroundColor = "#282c34";
    } else {
      setMode("btn btn-dark");
      setModetxt("dark_mode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="\">
            {props.appName}
          </a>
          <button type="button" className={mode} onClick={changeMode} style={{borderRadius:'50%'}}>
            <span className="material-symbols-outlined" >  
              {modetxt}
          </span>
          </button>
        </div>
      </nav>
    </>
  );
}
