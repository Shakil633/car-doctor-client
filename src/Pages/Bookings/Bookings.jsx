import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
// import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  const url = `https://car-doctor-server-flame-eight.vercel.app/booking?email=${user?.email}`;

  useEffect(() => {
    // axios.get(url, { withCredentials: true })
    // .then((res) => {
    //   setBooking(res.data);
    // });

    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  //booking delete
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://car-doctor-server-flame-eight.vercel.app/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");

            const remaining = booking.filter((booking) => booking._id !== id);
            setBooking(remaining);
          }
        });
    }
  };

  // booking update
  const handleUpdate = (id) => {
    fetch(`https://car-doctor-server-flame-eight.vercel.app/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = booking.filter((booking) => booking._id !== id);
          const update = booking.find((booking) => booking._id === id);
          update.status = "confirm";
          const newBooking = [update, ...remaining];
          setBooking(newBooking);
        }
      });
  };

  return (
    <div>
      <h2>Total: {booking.length}</h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
