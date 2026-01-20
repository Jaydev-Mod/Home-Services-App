import axios from "axios";
import { useEffect, useState } from "react";

const STATUSES = [
  "PENDING",
  "ASSIGNED",
  "IN_PROGRESS",
  "COMPLETED",
  "CANCELLED_BY_CUSTOMER",
  "CANCELLED_BY_PROVIDER",
  "PROVIDER_NO_SHOW"
];

export default function AdminPanel() {
  const [bookings, setBookings] = useState([]);

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/bookings");
    setBookings(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const override = async (id, status) => {
    await axios.post(`http://localhost:5000/api/admin/bookings/${id}/override`, {
      status
    });
    load();
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>

      {bookings.map(b => (
        <div className="card" key={b._id}>
          <h3>{b.customerName}</h3>
          <p>Service: {b.serviceType}</p>
          <p>Status: <b>{b.status}</b></p>

          <select onChange={e => override(b._id, e.target.value)}>
            <option>Change Status</option>
            {STATUSES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
