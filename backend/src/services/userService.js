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

const loginService = async (email, password) => {
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return {
          EC: 2,
          EM: "Invalid Email/Password",
        };
      } else {
        // create access token
        return "Create an access token";
      }
    } else {
      return {
        EC: 1,
        EM: "Invalid Email/Password",
      };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createUserService,
  loginService,
};
