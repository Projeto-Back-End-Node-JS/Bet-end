import { Router } from "express";
import matchDeleteController from "../controllers/matches/matchDelete.controller";
import matchesCreateController from "../controllers/matches/matchesCreate.controller";
import matchListController from "../controllers/matches/matchList.controller";
import { isAdmUser } from "../middleware/isUserAdm.middleware";
import tokenMiddleware from "../middleware/tokenAuth.middleware";
import matchAlreadyExists from "../utils/matchAlreadyExists.utils";

const matchRoutes = Router();

matchRoutes.post(
  "",
  matchAlreadyExists,
  tokenMiddleware,
  isAdmUser,
  matchesCreateController
);
matchRoutes.get("/:id/pool", matchListController);
matchRoutes.patch("/:id");
matchRoutes.delete("/:id", tokenMiddleware, isAdmUser, matchDeleteController);

export default matchRoutes;
