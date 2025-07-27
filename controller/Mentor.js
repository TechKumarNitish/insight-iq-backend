const User = require("../models/User");

exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await User.find({ accountType: "Mentor" })
      .populate({
        path: "additionalDetails",
        populate: {
          path: "areaOfExpertise",
          populate: {
            path:"tags",
            model:"Tag"
          }
        }
      })
      .select("-password"); // hide password

    return res.status(200).json({
      success: true,
      data: mentors
    });
  } catch (err) {
    console.error("Error fetching mentors:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch mentors"
    });
  }
};
