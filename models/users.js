const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
{
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Users = mongoose.model('User', usersSchema);
module.exports = Users;

