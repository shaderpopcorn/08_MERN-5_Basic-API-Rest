const { User } = require("../models/user-model");

const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.status(200).json({ data: allUsers });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userById = await User.findById(id);
  res.status(200).json({ data: userById });
};

const createUser = async (req, res) => {
  const newUser = req.body;
  const createdUser = new User(newUser);
  createdUser.save();
  res.status(201).json({ data: createdUser });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password, avatarUrl } = req.body;
  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      avatarUrl: avatarUrl,
    },
    { new: true }
  );
  res.status(200).json({ data: updatedUser });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id);
  res.status(200).json({ data: deletedUser });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
