import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt=""
            className="rounded-xl w-full h-[180px]"
          />
        </figure>
        <div className="card-body items-start text-center">
          <h2 className="card-title ">{title}</h2>
          <p className="text-[#FF3811] text-lg font-semibold">Price: ${price}</p>
          <div className="card-actions">
          <Link to={`/checkout/${_id}`}>  <button className="btn btn-primary">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
