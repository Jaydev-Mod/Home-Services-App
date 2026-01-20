const Booking = require("../models/Booking");
const updateStatus = require("../utils/statusUpdater");

exports.overrideStatus = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  updateStatus(booking, req.body.status, "Admin override");
  await booking.save();
  res.json(booking);
};
