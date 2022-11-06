import { Router } from "express";
import { Matches } from "../entities/matches.entity";

const poolRoutes = Router();

poolRoutes.post("/");
poolRoutes.get("/");
poolRoutes.patch("/:poolId");
poolRoutes.delete("/:poolId");

// Matches creation
poolRoutes.post("/:poolId/matches/");
poolRoutes.get("/:poolId/matches/");
poolRoutes.patch("/:poolId/matches/:matchId");
poolRoutes.delete("/:poolId/matches/:matchId");

// Bets creation
poolRoutes.post("/:poolId/matches/:matchId/bets");
poolRoutes.get("/:poolId/matches/:matchId/bets");
poolRoutes.patch("/:poolId/matches/:matchId/bets/betId");
poolRoutes.delete("/:poolId/matches/:matchId/bets/betId");

export default poolRoutes;
