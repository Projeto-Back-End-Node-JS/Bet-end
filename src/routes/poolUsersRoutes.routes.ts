import { Router } from "express";
import createPoolUsersController from "../controllers/poolUsers/createPoolUsers.controller";
import deleteUserController from "../controllers/poolUsers/deleteUser.controller";
import listUsersPoolController from "../controllers/poolUsers/listUsersPool.controller";
import isOwnerMiddleware from "../middleware/isOwner.middleware";
import tokenMiddleware from "../middleware/tokenAuth.middleware";

const poolUsersRoutes = Router();

poolUsersRoutes.post(
  "",
  tokenMiddleware,
  isOwnerMiddleware,
  createPoolUsersController
);
poolUsersRoutes.get("/:id", listUsersPoolController);
poolUsersRoutes.delete(
  "/:id",
  tokenMiddleware,
  isOwnerMiddleware,
  deleteUserController
);

export default poolUsersRoutes;
