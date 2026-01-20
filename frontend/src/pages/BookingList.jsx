import axios from "axios";
import { useEffect, useState } from "react";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  const loadBookings = async () => {
    const res = await axios.get("http://localhost:5000/api/bookings");
    setBookings(res.data);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const cancelBooking = async (id) => {
    try {
      await axios.post(
        `http://localhost:5000/api/bookings/${id}/cancel`
      );
      loadBookings(); // 🔥 refresh state
    } catch (err) {
      alert("Cannot cancel this booking");
    }
  };

  const completeBooking = async (id) => {
    try {
      await axios.post(
        `http://localhost:5000/api/bookings/${id}/complete`
      );
      loadBookings(); // 🔥 refresh state
    } catch (err) {
      alert("Cannot complete booking");
    }
  };

  return (
    <div className="container">
      {bookings.map(b => (
        <div className="card" key={b._id}>
          <h3>{b.customerName}</h3>
          <p>Service: {b.serviceType}</p>
          <p>
            Status: <b>{b.status}</b>
          </p>

          {/* ACTION BUTTONS */}
          {b.status === "PENDING" || b.status === "ASSIGNED" ? (
            <button onClick={() => cancelBooking(b._id)}>
              Cancel
            </button>
          ) : null}

          {b.status === "ASSIGNED" ? (
            <button onClick={() => completeBooking(b._id)}>
              Complete
            </button>
          ) : null}

          <h4>History</h4>
          <ul>
            {b.history.map((h, i) => (
              <li key={i}>
                {h.status} —{" "}
                {new Date(h.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
