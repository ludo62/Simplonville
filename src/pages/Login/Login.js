import React from "react";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="panel">
        <div className="panelHeader">
          <span className="panelHeaderText">Connexion</span>
        </div>
        <div className="inputs">
          <TextInput text="Email" />
          <TextInput text="Mot de passe" />
        </div>
        <Link to="/home" className="loginBtn">
          <span className="loginText">Connexion</span>
        </Link>
        <div className="loginLinks">
          <a href="/">
            <span className="link">Mot de passe Oublié ?</span>
          </a>
          <span className="point">.</span>
          <a href="/signup">
            <span className="link">Inscription</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
