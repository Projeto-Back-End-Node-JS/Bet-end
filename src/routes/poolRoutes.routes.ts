import { Router } from "express";
import { isAdmUser } from "../middleware/isUserAdm.middleware";
import tokenMiddleware from "../middleware/tokenAuth.middleware";
import poolMatchesCreateController from "../controllers/poolMatches/poolMatchesCreate.controller";
import createPoolController from "../controllers/pools/poolCreate.controller";

const poolRoutes = Router();

poolRoutes.post("/", tokenMiddleware, isAdmUser, createPoolController);
poolRoutes.post(
  "/poolmatches",
  tokenMiddleware,
  isAdmUser,
  poolMatchesCreateController
);
poolRoutes.get("/");
poolRoutes.patch("/:id");
poolRoutes.delete("/:id");

export default poolRoutes;
