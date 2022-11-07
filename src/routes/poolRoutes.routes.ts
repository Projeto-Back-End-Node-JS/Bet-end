import { Router } from "express";
import poolCreateController from "../controllers/pools/poolCreate.controller";
import deletePoolController from "../controllers/pools/poolDelete.controller";
import listPoolController from "../controllers/pools/poolList.controller";
import listDataPoolController from "../controllers/pools/poolListData.controller";
import updatePoolController from "../controllers/pools/poolUpdate.controller";
import isOwner from "../middleware/isOwner.middleware";
import tokenMiddleware from "../middleware/tokenAuth.middleware";

const poolRoutes = Router();

poolRoutes.post("/", poolCreateController);
poolRoutes.post("/:poolId/matches");
poolRoutes.get("/", listPoolController);
poolRoutes.patch("/:id", tokenMiddleware, isOwner, updatePoolController);
poolRoutes.delete("/:id", tokenMiddleware, isOwner, deletePoolController);
poolRoutes.get("/:id", tokenMiddleware, isOwner, listDataPoolController);

export default poolRoutes;
