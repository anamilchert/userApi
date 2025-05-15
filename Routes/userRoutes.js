const express = require('express');
const router = express.Router();
const User = require('../Models/User');

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

router.post('/users', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
  res.status(201).json({ message: 'Usuário criado com sucesso!' });
});

router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado.' });
  }
});

router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id);
  if (deletedUser) {
    res.status(200).json({ message: 'Usuário deletado com sucesso.' });
  } else {
    res.status(404).json({ message: 'Usuário não encontrado.' });
  }
});

module.exports = router;