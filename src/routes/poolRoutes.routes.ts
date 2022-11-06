import { Router } from "express";
import poolCreateController from "../controllers/pool/poolCreate.controller";

const poolRoutes = Router();

poolRoutes.post("/", poolCreateController);
poolRoutes.get("/");
poolRoutes.patch("/:id");
poolRoutes.delete("/:id");

export default poolRoutes;
