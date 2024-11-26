require("dotenv").config();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const createUserService = async (name, email, password) => {
  try {
    //check user exist
    let user = await User.findOne({ email: email });
    if (user) {
      console.log("User already exist");
      return null;
    }
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

const getUserService = async () => {
  try {
    let result = await User.find({}).select("-password");
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
        const payload = {
          email: user.email,
          name: user.name,
        };
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
        });
        return {
          EC: 0,
          accessToken,
          user: {
            email: user.email,
            name: user.name,
          },
        };
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
  getUserService,
};
