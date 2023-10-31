// import { useEffect } from "react";
// import { useState } from "react";
import UseServices from "../../Hooks/UseServices";
import ServiceCard from "./ServiceCard";

//DRY --> Do not repeat yourself
const Services = () => {
  const services = UseServices();
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("https://car-doctor-server-flame-eight.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  console.log(services);
  return (
    <div>
      <div className=" text-center mb-10">
        <h3 className="text-[#FF3811] text-xl font-bold ">Service</h3>
        <h2 className="text-3xl font-bold py-3">Our Service Area</h2>
        <p className=" text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>

      <div className=" grid grid-cols-3 gap-5 mb-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
