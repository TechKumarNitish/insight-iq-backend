const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    areaOfInterest: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Technology'
      }
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true // assuming one mentor profile per user
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Mentor', mentorSchema);
