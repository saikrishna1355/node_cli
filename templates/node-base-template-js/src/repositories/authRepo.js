const { User } = require("../models/User");

const findByUsername = async (user_name) => {
  return await User.findOne({ where: { user_name } });
};

module.exports = {
  findByUsername,
};
