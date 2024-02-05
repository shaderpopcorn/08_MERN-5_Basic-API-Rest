const { User } = require("../models/user-model");

const getAllUsers = async (req, res) => {
  const allStudents = await User.find({});
  res.status(200).json({ data: allStudents });
};

module.exports = { getAllUsers };
