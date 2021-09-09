import { UsersRoute } from "@alopwer/shared";
import express from "express";

export const UsersController = express.Router()

UsersController.get(UsersRoute.GET_ALL, (req, res, next) => {
  res.send('users get all')
})