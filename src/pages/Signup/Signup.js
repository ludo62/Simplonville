import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";

function Signup() {
  return (
    <div className="signUpContainer">
      <div className="card">
        <div className="signuplogo">
        </div>
        <div className="signupHeader">
          <span>Créer un compte</span>
        </div>
        <TextInput text="Email" />
        <TextInput text="Mot de passe" />
        <Link to="/home" className="signupBtn">
          <span className="signupText">Inscription</span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
