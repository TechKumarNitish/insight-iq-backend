const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema(
  {
    tag_name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    active: {
      type: Boolean,
        default: true
    },
    // color: {
    //   type: String,
    //   default: '#000000' // optional hex code
    // },
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: false
    // }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Tag', tagSchema);
