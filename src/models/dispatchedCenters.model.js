const mongoose = require('mongoose');

const DispatchedCentersSchema = new mongoose.Schema(
  {
    center_name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    courier_service: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const DispatchedCentersModel = mongoose.model('dispatched-centers', DispatchedCentersSchema);

module.exports = DispatchedCentersModel;
