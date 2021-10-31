import React from "react";
import "./SingleDeliveyBoy.css";
const SingleDeliveryBoy = (props) => {
  const { name, desc, img } = props.singleBoy;
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top img-set" />
        <div className="card-body">
          <h5 className="card-title">Name:{name}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleDeliveryBoy;
