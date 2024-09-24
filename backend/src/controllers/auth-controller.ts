import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//MONGOOSE => ODM => Object Data Mapping

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй." });
    }

    const crearedUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      phoneNumber: "",
    });
    res.status(201).json({ message: "create user is sucessfull" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(404).json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password.toString());
      if (!isCheck) {
        res.status(400).json({
          message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
        });
      } else {
        const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
          expiresIn: "24h",
        });
        res.status(200).json({
          message: "success",
          token,
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Client error" });
  }
};
