import React from "react";
import { NavLink } from "react-router-dom";
 
function Fifth() {
  return (
    <div className="fifth">
      <NavLink to="/seventh">
         <img
          src={`${process.env.PUBLIC_URL}/img/gift.png`}
          alt="Gift"
          className="gift"
        />\
      </NavLink>
      <div></div>
    </div>
  );
}

export default Fifth;
