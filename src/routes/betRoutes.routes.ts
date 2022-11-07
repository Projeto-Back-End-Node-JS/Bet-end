import { Router } from "express";
import createBetController from "../controllers/bets/createBet.controller";
import listBetsUserController from "../controllers/bets/listBetsUser.controller";
import tokenMiddleware from "../middleware/tokenAuth.middleware";

const betRoutes = Router();

betRoutes.post("/", tokenMiddleware, createBetController);
betRoutes.get("/:id", tokenMiddleware, listBetsUserController);
betRoutes.patch("/:id");
betRoutes.delete("/:id");

export default betRoutes;
