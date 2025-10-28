const addEmailJob = require("../jobs/addEmailJob");
const authRepo = require("../repositories/authRepo");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { user_name, password } = req.body;
  const user = await authRepo.findByUsername(user_name);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Invalid credentials" });
  const token = jwt.sign(
    { id: user.id, user_name: user.user_name },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  await addEmailJob({
    to: "test@example.com",
    subject: "Welcome",
    body: "Thanks for signing up!",
  });
  Log.info(`📧 Sending email to:`);
  res.json({ token });
};
const logout = async (req, res) => {
  res.json({ message: "Logged out successfully" });
};

module.exports = { login, logout };
