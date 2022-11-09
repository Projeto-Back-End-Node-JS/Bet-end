import { Router } from "express";
import createPoolMatchesController from "../controllers/poolMatches/createPoolMatches.controller";
import deletePoolMatchController from "../controllers/poolMatches/deletePoolMatches.controller";
import listMatchesPoolController from "../controllers/poolMatches/listMatchesPool.controller";
import tokenMiddleware from "../middleware/tokenAuth.middleware";

const poolMatchesRoutes = Router();

poolMatchesRoutes.post("", tokenMiddleware, createPoolMatchesController);
poolMatchesRoutes.get("/:id", listMatchesPoolController);
poolMatchesRoutes.delete("/:id", tokenMiddleware, deletePoolMatchController);

export default poolMatchesRoutes;
