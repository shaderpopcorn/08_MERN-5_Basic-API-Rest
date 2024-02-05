const { User } = require("./user-model");

const users = [
  {
    firstName: "FirstName1",
    lastName: "LastName1",
    email: "name1@example.com",
    password: "password1",
    avatarUrl: "imageUrl1",
  },
  {
    firstName: "FirstName2",
    lastName: "LastName2",
    email: "name2@example.com",
    password: "password2",
    avatarUrl: "imageUrl2",
  },
  {
    firstName: "FirstName3",
    lastName: "LastName3",
    email: "name3@example.com",
    password: "password3",
    avatarUrl: "imageUrl3",
  },
  {
    firstName: "FirstName4",
    lastName: "LastName4",
    email: "name4@example.com",
    password: "password4",
    avatarUrl: "imageUrl4",
  },
];

const clearAndInsertData = async () => {
  await User.collection.drop();
  await User.insertMany(users);
};

module.exports = { clearAndInsertData };
