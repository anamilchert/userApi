const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const newUser = await User.create({ username, email, password: hash });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Credenciais inválidas" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Credenciais inválidas" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find({}, '-password');
  res.json(users);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  const user = await User.findByIdAndUpdate(id, update, { new: true });
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: "Usuário deletado" });
};