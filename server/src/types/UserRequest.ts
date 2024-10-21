import { Request } from "express";

export interface createUserRequest extends Request{
  body: {
    username: string;
    email: string;
    password: string;
  };
}

export interface getUserRequest extends Request{
  body: {
    
  }
}