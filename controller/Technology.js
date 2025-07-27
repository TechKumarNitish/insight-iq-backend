const Technology = require('../models/Technology');

exports.addTechnology = async (req, res) => {
  try {
    const { tech_name, tag, description, active=true } = req.body;

    if (!tech_name) return res.status(400).json({ message: "Tech name is required" });

    const existing = await Technology.findOne({ tech_name: tech_name.toLowerCase() });
    if (existing) return res.status(409).json({ message: "Technology already exists" });

    const tech = new Technology({ tech_name: tech_name.toLowerCase(), tag, description, active });
    const savedTech = await tech.save();

    res.status(201).json({ message: "Technology created", data: savedTech });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
