const Booking = require("../models/Booking");
const assignProvider = require("../services/assignment.service");
const retry = require("../services/retry.service");
const updateStatus = require("../utils/statusUpdater");

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking({
      customerName: req.body.customerName,
      serviceType: req.body.serviceType,
      address: req.body.address,
      status: "PENDING",
      history: [
        {
          status: "PENDING",
          note: "Booking created",
          timestamp: new Date()
        }
      ]
    });

    await booking.save();

    try {
      await retry(() => assignProvider(booking));
    } catch (e) {
    }

    res.status(201).json(booking);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create booking" });
  }
};

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json(bookings);
};

exports.completeBooking = async (req, res) => {
  const updateStatus = require("../utils/statusUpdater");
  const booking = await Booking.findById(req.params.id);

  updateStatus(booking, "COMPLETED", "Service completed");
  await booking.save();

  res.json(booking);
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    if (booking.status === "COMPLETED") {
      return res.status(400).json({ error: "Cannot cancel completed booking" });
    }

    updateStatus(
      booking,
      "CANCELLED_BY_CUSTOMER",
      "Cancelled by customer"
    );

    await booking.save();

    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cancel failed" });
  }
};
