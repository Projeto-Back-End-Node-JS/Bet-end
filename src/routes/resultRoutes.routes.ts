import { Router } from "express";
import updateResultBetController from "../controllers/bets/updateResultBet.controller";
import tokenMiddleware from "../middleware/tokenAuth.middleware";

const resultRoutes = Router();

resultRoutes.patch("/:id", tokenMiddleware, updateResultBetController);

export default resultRoutes;
