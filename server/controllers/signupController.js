import userModel from "../models/userModel.js";

export const signUpController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // validations
    if (!firstName) {
      res.status(403).send({
        success: false,
        message: "Please enter first name",
      });
    }
    if (!lastName) {
      res.status(403).send({
        success: false,
        message: "Please enter last name",
      });
    }
    if (!email) {
      res.status(403).send({
        success: false,
        message: "Please enter email",
      });
    }
    if (!password) {
      res.status(403).send({
        success: false,
        message: "Please enter password",
      });
    }

    const isExistingUser = await userModel.findOne({ email });
    if (isExistingUser) {
      res.status(400).send({
        success: false,
        message: "User is already registered, please login",
      });
    }

    const newUser = new userModel({
      firstName,
      lastName,
      email,
      password,
    }).save();
    if (!newUser) {
      res.status(500).send({
        success: false,
        message: "Failed to signup, please try again",
      });
    }

    return res.status(200).send({
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Error in signUpController",
      err,
    });
  }
};
