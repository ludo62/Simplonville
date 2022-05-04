import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import "./NotSelectedMessage.css";
const NotSelectedMessage = () => {
  return (
    <div className="notSelectedMessage">
      <span>Vous n'avez pas de messages</span>
      <span>Choisissez-en un parmi vos messages existants ou créez-en un nouveau.</span>
      <BlueButton text="New Message" />
    </div>
  );
};

export default NotSelectedMessage;
