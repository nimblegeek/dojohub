const mongoose = require('mongoose');

const boilerSchema = mongoose.Schema(
  {
    boilerplateName: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
    },
    numberOfDownloads: {
      type: Number,
      default: 0,
    },
    mainStack: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

module.exports = mongoose.models.Boiler || mongoose.model('Boiler', boilerSchema);