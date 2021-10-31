import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="notFound-section">
        <h1 className="text-center  fw-bold notfound-head-text">OOPS!</h1>
        <h1 className="text-center text-dark notfound-middle-text ">
          404-PAGE NOT FOUND
        </h1>
        <p className=" text-center notfound-desc h5 fw-bold">
          the page you are loking for might have been removed , had its name
          changed or temprarily unavailable
        </p>
        <NavLink className="notfound-button-style" exact to="/home">
          GO TO HOME PAGE
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
