import { Router } from "express";

const betRoutes = Router();

betRoutes.post("/");
betRoutes.get("/");
betRoutes.patch("/:id");
betRoutes.delete("/:id");

export default betRoutes;
