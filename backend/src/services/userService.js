const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createUserService = async (name, email, password) => {
  try {
    //hash user password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    //create user
    let result = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: "tuananhtestrole",
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createUserService,
};
