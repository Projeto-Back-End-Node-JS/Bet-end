import { Router } from "express";
import createPoolController from "../controllers/pools/poolCreate.controller";
import { isAdmUser } from "../middleware/isUserAdm.middleware";
import tokenMiddleware from "../middleware/tokenAuth.middleware";

const poolRoutes = Router();

poolRoutes.post("/", tokenMiddleware, isAdmUser, createPoolController);
poolRoutes.post("/:poolId/matches");
poolRoutes.get("/");
poolRoutes.patch("/:id");
poolRoutes.delete("/:id");

export default poolRoutes;
