const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  customerName: String,
  serviceType: String,
  address: String,

  status: {
    type: String,
    enum: [
      "PENDING",
      "ASSIGNED",
      "IN_PROGRESS",
      "COMPLETED",
      "CANCELLED_BY_CUSTOMER",
      "CANCELLED_BY_PROVIDER",
      "PROVIDER_REJECTED",
      "PROVIDER_NO_SHOW"
    ],
    default: "PENDING"
  },

  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    default: null
  },

  history: [
    {
      status: String,
      note: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Booking", BookingSchema);
