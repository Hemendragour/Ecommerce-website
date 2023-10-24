import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import { comparePassword, hashPassword } from "./../helper/authHelper.js";
import { response } from "express";
// import  "hashPassword" from "../helper/authHelper"

// import { hasdPassword } from '../helper/authHelper.js';
export const registerController = async (req, res) => {
  try {
    const { name, email, phone, password, address, answer } = req.body;
    if (!name) {
      return res.send({ message: "name is required" });
    }
    if (!email) {
      return res.send({ message: "email is required" });
    }
    if (!password) {
      return res.send({ message: "password is required" });
    }
    if (!phone) {
      return res.send({ message: "phone is required" });
    }
    if (!address) {
      return res.send({ message: "addres is required" });
    }
    if (!answer) {
      return res.send({ message: "addres is required" });
    }
    const exisitingUser = await userModel.findOne({ email });
    console.log("zero")

    if (exisitingUser) {
      return res.status(200).send({
        success: true,
        message: " already register please login",
      });
    }
    const hashedPassword = await hashPassword(password);
    console.log("first")
    const user = await new userModel({
      name,
      email,
      address,
      phone,
      password: hashedPassword,

    })
    console.log("second")
    user.save();

    res.status(200).json({
      success: true,
      message: " user register successful",
      user,
    });
  } catch (error) {
    // console.log(error.response.data);
    res.status(500).json({
      success: false,
      message: "error is registeration",
      error,
    });
  }

  // try {
  //   const { name, email, phone, password, address } = req.body;

  //   // Input validation (You might want to implement more robust validation)
  //   if (!name || !email || !phone || !password || !address) {
  //     return res.status(400).json({ message: 'All fields are required' });
  //   }

  //   // Check if user with the same email already exists
  //   const existingUser = await userModel.findOne({ email });
  //   if (existingUser) {
  //     return res.status(400).json({ message: 'User with this email already exists' });
  //   }

  //   // Hash password
  //   const hashedPassword = await hashPassword(password);

  //   // Create a new user
  //   const newUser = new userModel({
  //     name,
  //     email,
  //     phone,
  //     password: hashedPassword,
  //     address
  //   });

  //   // Save user to database
  //   await newUser.save();

  //   res.status(200).json({ success: true, message: 'User registered successfully' });
  // } catch (error) {
  //   // console.error(error);
  //   console.log(error.response.data)

  //   res.status(500).json({ success: false, message: 'Internal server error' });
  // }


};

// post
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validtiuon
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: " Invalid email and passwors ",
      });
    }

    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "email is not register",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }

    // token
    // const tokenId = "DJKFDUIHF72835RHWEKFH9834";
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        addrress: user.address,
        role: user.role
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(600).send({
      success: false,
      message: " error in login",
      error,
    });
  }
};

// forget - password 

export const forgetPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: 'email is required' })
    }
    if (!newPassword) {
      res.status(400).send({ message: 'newPassword is required' })
    }
    if (!answer) {
      res.status(400).send({ message: 'answer is required' })
    }

    // chech
    const user = await userModel.findOne({ email })
    // validation
    if (!user) {

      return res.status(404).send({
        success: false,
        message: 'Wrong email or Answer'
      })
    }

    const hashed = await hashPassword(newPassword)
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: 'password reset succeccfully'
    })


  } catch (error) {

    res.status(500)
      .send({
        success: false,
        message: 'somthing is wrong',
        error

      })

  }
}


// test controller
export const testController = (req, res) => {
  res.send("protected routes");
};
