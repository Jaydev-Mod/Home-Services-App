const Booking = require("../models/Booking");
const updateStatus = require("../utils/statusUpdater");

exports.acceptBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  updateStatus(booking, "IN_PROGRESS", "Provider accepted job");
  await booking.save();
  res.json(booking);
};

exports.rejectBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  updateStatus(booking, "PROVIDER_REJECTED", "Provider rejected job");
  await booking.save();
  res.json(booking);
};
