import { Router } from "express";
import createPoolMatchesController from "../controllers/poolMatches/createPoolMatches.controller";
import deletePoolMatchController from "../controllers/poolMatches/deletePoolMatches.controller";
import listMatchesPoolController from "../controllers/poolMatches/listMatchesPool.controller";
import isOwnerMiddleware from "../middleware/isOwner.middleware";
import tokenMiddleware from "../middleware/tokenAuth.middleware";

const poolMatchesRoutes = Router();

poolMatchesRoutes.post(
  "",
  tokenMiddleware,
  isOwnerMiddleware,
  createPoolMatchesController
);
poolMatchesRoutes.get("/:id", listMatchesPoolController);
poolMatchesRoutes.delete(
  "/:id",
  tokenMiddleware,
  isOwnerMiddleware,
  deletePoolMatchController
);

export default poolMatchesRoutes;
