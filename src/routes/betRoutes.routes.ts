import { Router } from "express";
import createBetController from "../controllers/bets/createBet.controller";
import deleteBetController from "../controllers/bets/deleteBet.controller";
import listBetsUserController from "../controllers/bets/listBetsUser.controller";
import updateBetAdmController from "../controllers/bets/updateBetAdm.controller";
import { isAdmUser } from "../middleware/isUserAdm.middleware";
import tokenMiddleware from "../middleware/tokenAuth.middleware";

const betRoutes = Router();

betRoutes.post("/", tokenMiddleware, createBetController);
betRoutes.get("/:id", tokenMiddleware, listBetsUserController);
betRoutes.patch("/:id", tokenMiddleware, isAdmUser, updateBetAdmController);
betRoutes.delete("/:id", tokenMiddleware, isAdmUser, deleteBetController);

export default betRoutes;
