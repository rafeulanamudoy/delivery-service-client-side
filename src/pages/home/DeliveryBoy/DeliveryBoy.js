import React, { useEffect, useState } from "react";
import SingleDeliveryBoy from "../SingleDeliveryBoy/SingleDeliveryBoy";
import "./DeliveryBoy.css";

const DeliveryBoy = () => {
  const [deliverBoy, setDeliverBoy] = useState([]);

  useEffect(() => {
    fetch("fakeApi.json")
      .then((res) => res.json())
      .then((data) => setDeliverBoy(data));
  }, []);
  return (
    <div>
      <h1 className="text-warning fw-bold">Our Delivery Boy</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 container-set">
        {deliverBoy.map((data) => (
          <SingleDeliveryBoy
            key={data.key}
            singleBoy={data}
          ></SingleDeliveryBoy>
        ))}
      </div>
    </div>
  );
};

export default DeliveryBoy;
