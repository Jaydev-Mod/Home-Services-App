const Provider = require("../models/Provider");
const updateStatus = require("../utils/statusUpdater");

const assignProvider = async (booking) => {
  const provider = await Provider.findOne({ isAvailable: true });
  if (!provider) throw new Error("No provider available");

  booking.providerId = provider._id;
  provider.isAvailable = false;

  updateStatus(booking, "ASSIGNED", "Provider auto-assigned");

  await provider.save();
  await booking.save();
};

module.exports = assignProvider;
