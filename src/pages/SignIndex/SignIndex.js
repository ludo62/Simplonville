import React from "react";
import { Link } from "react-router-dom"
import "./SignIndex.css";

function SignIndex() {
  return (
    <div className="container">
      <div className="col2">
        <div className="menu">
          <span className="header">
            Que ce passe t'il aujourdhui ?
          </span>
          <span className="join">Rejoindre Simplonville maintenant</span>
          <div className="buttons">
            <Link to="/signup" className="signup">
              <div className="signupItem">
                <span className="signupText">Inscription</span>
              </div>
            </Link>
            <Link to="/login" className="login">
              <div className="loginItem">
                <span className="loginText">Connexion</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIndex;
