import React from "react";
import "./Partners.css";
import partner2 from "../../../images/partner/2.jpg";
import partner1 from "../../../images/partner/1.jpg";
import partner3 from "../../../images/partner/3.jpg";
import partner4 from "../../../images/partner/4.jpg";

import partner6 from "../../../images/partner/6.jpg";
const Partners = () => {
  return (
    <div>
      <h1 className="text-success fw-bold">Our Partners</h1>

      <div className="partner-container">
        <img className="img-fluid  img-thumbnail " src={partner1} alt="" />
        <img className="img-fluid img-thumbnail " src={partner3} alt="" />
        <img className="img-fluid  img-thumbnail" src={partner2} alt="" />
        <img className="img-fluid  img-thumbnail" src={partner4} alt="" />

        <img className="img-fluid  img-thumbnail" src={partner6} alt="" />
      </div>
    </div>
  );
};

export default Partners;
