import { Router } from "express";

const poolRoutes = Router();

poolRoutes.post("/");
poolRoutes.get("/");
poolRoutes.patch("/:id");
poolRoutes.delete("/:id");

export default poolRoutes;
