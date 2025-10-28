const { User } = require("../models/User");

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json({ users });
};

module.exports = {
  getAllUsers,
};
