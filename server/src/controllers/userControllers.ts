import { Request, Response } from "express";
import userDB from "../models/userDB";
import { createUserRequest, getUserRequest } from "../types/UserRequest";

export const createUser = async (req: createUserRequest, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const [result] = await userDB.query(
      "INSERT INTO users (username, email, password) VALUES (?,?,?)",
      [username, email, password]
    );

    res.status(201).json({message: "User created successfully", result})
  } catch (error) {
    console.error(error)
    res.status(500).json({messaje: "Error creating user", error: error})
  }
};

export const getUser = async (req:getUserRequest, res: Response) => {
  try {
    const [result] = await userDB.query("SELECT * FROM users");
    res.json({messaje: "Users get successfully", result})
  } catch (error) {
    console.error(error)
    res.status(500).json({messaje: "Error geting users"})
  }
}