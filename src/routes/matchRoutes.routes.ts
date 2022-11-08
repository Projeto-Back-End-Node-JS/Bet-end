import { Router } from "express";
import matchDeleteController from "../controllers/matches/matchDelete.controller";
import matchesCreateController from "../controllers/matches/matchesCreate.controller";
import matchListController from "../controllers/matches/matchList.controller";
import matchUpdateController from "../controllers/matches/matchUpdate.controller";
import isOwnerMiddleware from "../middleware/isOwner.middleware";
import tokenMiddleware from "../middleware/tokenAuth.middleware";
import matchAlreadyExists from "../utils/matchAlreadyExists.utils";

const matchRoutes = Router();

matchRoutes.post(
  "",
  matchAlreadyExists,
  tokenMiddleware,
  isOwnerMiddleware,
  matchesCreateController
);
matchRoutes.get("", matchListController);
matchRoutes.patch(
  "/:id",
  tokenMiddleware,
  isOwnerMiddleware,
  matchUpdateController
);
matchRoutes.delete(
  "/:id",
  tokenMiddleware,
  isOwnerMiddleware,
  matchDeleteController
);

export default matchRoutes;
