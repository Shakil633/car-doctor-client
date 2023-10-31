import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const services = useLoaderData();
  const { title, price, _id, img } = services;
  const { user } = useContext(AuthContext);

  const handleCarServices = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const due = form.due.value;

    const booking = {
      customerName: name,
      date,
      email,
      img,
      due,
      price: price,
      services: title,
      service_id: _id,
    };
    console.log(booking);
    fetch("https://car-doctor-server-flame-eight.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Services Booking Successfully");
        }
      });
  };
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-center">
        Services Name: {title}
      </h2>

      <form onSubmit={handleCarServices} className="card-body">
        <div className=" grid grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="Email"
              placeholder="Your Email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              name="due"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn text-white  bg-[#ff3811] hover:bg-[#e5320f]"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
