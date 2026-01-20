import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBooking() {
    const [form, setForm] = useState({
        customerName: "",
        serviceType: "",
        address: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submit = async () => {
        if (!form.customerName || !form.serviceType || !form.address) {
            alert("Fill all fields");
            return;
        }

        setLoading(true);
        try {
            await axios.post("http://localhost:5000/api/bookings", form);
            navigate("/bookings"); // success path ONLY
        } catch (e) {
            console.error(e);
            alert("Booking could not be submitted");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="container">
            <div className="card">
                <h2>Create Booking</h2>

                <label>Customer Name</label>
                <input
                    value={form.customerName}
                    onChange={e => setForm({ ...form, customerName: e.target.value })}
                />

                <label>Service</label>
                <input
                    value={form.serviceType}
                    onChange={e => setForm({ ...form, serviceType: e.target.value })}
                />

                <label>Address</label>
                <input
                    value={form.address}
                    onChange={e => setForm({ ...form, address: e.target.value })}
                />

                <button disabled={loading} onClick={submit}>
                    {loading ? "Booking..." : "Book Service"}
                </button>
            </div>
        </div>
    );
}
