import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5 ">
      <div
        className="text-center space-y-5 mb-10
        "
      >
        <h3 className="text-3xl text-orange-500">Our Services</h3>
        <h3 className="text-5xl font-semibold">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
