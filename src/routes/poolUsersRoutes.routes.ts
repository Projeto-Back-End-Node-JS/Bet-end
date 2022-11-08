import { Router } from "express";
import createPoolUsersController from "../controllers/poolUsers/createPoolUsers.controller";
import listUsersPoolController from "../controllers/poolUsers/listUsersPool.controller";

const poolUsersRoutes = Router();

poolUsersRoutes.post("", createPoolUsersController);
poolUsersRoutes.get("/:id", listUsersPoolController);

export default poolUsersRoutes;
