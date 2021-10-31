import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "../../home/Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://grisly-ghost-25994.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="service">
      <h1> this is services</h1>
      <div className="row row-cols-1 row-cols-md-3 g-3 w-100vw">
        {services.map((service) => (
          <Service key={Math.random()} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
