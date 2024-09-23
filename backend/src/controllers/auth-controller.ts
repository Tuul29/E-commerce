import { Request, Response } from "express";
import User from "../models/user.model";

//MONGOOSE => ODM => Object Data Mapping

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "Хоосон утга байж болохгүй." });
  }

  const crearedUser = await User.create({
    name,
    email,
    password,
    phoneNumber: "",
  });
  res.status(201).json({ message: "sucess", user: crearedUser });
};

export const login = (req: Request, res: Response) => {
  res.status(200).json({ message: "Login Success" });
};
