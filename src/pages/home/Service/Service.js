import React from "react";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import PlaceOrder from "../../PlaceOrder/PlaceOrder";
import "./Service.css";

const Service = (props) => {
  const { serviceName, desc, img, cost, _id } = props.service;
  //console.log(_id);

  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={img}
          className="card-img-top img-fluid img-thumbnail h-100"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{serviceName}</h5>
          <p className="card-text">{desc}</p>
          <p>Delivery Cost:{cost}</p>
          <Link
            to={`/placeorder/${serviceName}`}
            className="btn btn-success d-block mx-auto mb-3"
          >
            Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
