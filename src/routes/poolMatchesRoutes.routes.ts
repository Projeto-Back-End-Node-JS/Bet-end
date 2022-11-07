import { Router } from "express";
import createPoolMatchesController from "../controllers/poolMatches/createPoolMatches.controller";
import listMatchesPoolController from "../controllers/poolMatches/listMatchesPool.controller";

const poolMatchesRoutes = Router();

poolMatchesRoutes.post("", createPoolMatchesController);
poolMatchesRoutes.get("/:id", listMatchesPoolController);

export default poolMatchesRoutes;
