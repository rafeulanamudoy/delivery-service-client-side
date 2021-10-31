import React from "react";
import useAuth from "../../../hooks/useAuth";
import Banner from "../../home/Banner/Banner";
import Services from "../../home/Services/Services";
import DeliveryBoy from "../DeliveryBoy/DeliveryBoy";
import Partners from "../Partners/Partners";

const Home = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <DeliveryBoy></DeliveryBoy>
      <Partners></Partners>
    </div>
  );
};

export default Home;
