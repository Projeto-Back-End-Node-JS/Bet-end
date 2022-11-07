import { Router } from "express";
import matchesCreateController from "../controllers/matches/matchesCreate.controller";
import matchListController from "../controllers/matches/matchList.controller";
import { isAdmUser } from "../middleware/isUserAdm.middleware";
import tokenMiddleware from "../middleware/tokenAuth.middleware";

const matchRoutes = Router();

matchRoutes.post("/", tokenMiddleware, isAdmUser, matchesCreateController);
matchRoutes.get("/:id/pool", matchListController);
matchRoutes.patch("/:id");
matchRoutes.delete("/:id");

export default matchRoutes;
