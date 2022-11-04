import { Router } from "express";
import userCreateController from "../controllers/user/userCreate.controller";
import userAlreadyExitsUtils from "../utils/userAlreadyExits.utils";

const userRoutes = Router();

userRoutes.post("/", userAlreadyExitsUtils, userCreateController);
userRoutes.get("/");
userRoutes.patch("/:id");
userRoutes.delete("/:id");

export default userRoutes;
