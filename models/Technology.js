const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema(
  {
    tech_name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    // iconUrl: {
    //   type: String,
    //   default: ''
    // },
    // category: {
    //   type: String,
    //   enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'AI/ML', 'Other'],
    //   default: 'Other'
    // },
    description: {
      type: String,
      default: ''
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
      }
    ],
    active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Technology', technologySchema);
