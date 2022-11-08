import { Router } from "express";
import poolCreateController from "../controllers/pools/poolCreate.controller";
import deletePoolController from "../controllers/pools/poolDelete.controller";
import listPoolController from "../controllers/pools/poolList.controller";
import listDataPoolController from "../controllers/pools/poolListData.controller";
import updatePoolController from "../controllers/pools/poolUpdate.controller";
import tokenMiddleware from "../middleware/tokenAuth.middleware";
import isOwnerMiddleware from "../middleware/isOwner.middleware";

const poolRoutes = Router();

poolRoutes.post("/", tokenMiddleware, poolCreateController);
poolRoutes.get("/", listPoolController);
poolRoutes.patch("/:id", tokenMiddleware, updatePoolController);
poolRoutes.delete("/:id", tokenMiddleware, deletePoolController);
poolRoutes.get("/:id", tokenMiddleware, listDataPoolController);

export default poolRoutes;
