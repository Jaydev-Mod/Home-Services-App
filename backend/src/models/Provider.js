const mongoose = require("mongoose");

const ProviderSchema = new mongoose.Schema({
  name: String,
  skills: [String],
  isAvailable: { type: Boolean, default: true }
});

module.exports = mongoose.model("Provider", ProviderSchema);
