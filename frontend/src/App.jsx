import { Routes, Route, Link } from "react-router-dom";
import CreateBooking from "./pages/CreateBooking";
import BookingList from "./pages/BookingList";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  return (
    <>
      <nav style={{ padding: 10 }}>
        <Link to="/">Create Booking</Link> |{" "}
        <Link to="/bookings">Bookings</Link> |{" "}
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CreateBooking />} />
        <Route path="/bookings" element={<BookingList />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </>
  );
}
