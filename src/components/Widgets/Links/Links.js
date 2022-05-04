import React from "react";
import "./Links.css";
import { MoreHoriz } from "@material-ui/icons";

const Links = () => {
  return (
    <div className="links">
      <div>
        <span>Conditions de services</span>
        <span>politique de confidentialité</span>
        <span>politique relative aux cookies</span>
      </div>
      <div>
        <span>Plus d'info</span>
        <span>
          Plus
          <MoreHoriz />
        </span>
        <span>202 Simplonville, Inc.</span>
      </div>
    </div>
  );
};

export default Links;
