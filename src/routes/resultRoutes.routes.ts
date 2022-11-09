import { Router } from "express";
import updateResultBetController from "../controllers/bets/updateResultBet.controller";
import { isAdmUser } from "../middleware/isUserAdm.middleware";
import tokenMiddleware from "../middleware/tokenAuth.middleware";

const resultRoutes = Router();

resultRoutes.patch(
  "/:id",
  tokenMiddleware,
  isAdmUser,
  updateResultBetController
);

export default resultRoutes;
