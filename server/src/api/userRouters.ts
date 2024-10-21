import express, {Router} from 'express';
const userRouter = Router();

import { createUser, getUser } from "../controllers/userControllers"

userRouter.post("/createUser", createUser)
userRouter.get("/getUser", getUser)

export default userRouter;