import { Request, Response } from "express";
import matchesCreateService from "../../services/matches/matchesCreate.service";

const matchesCreateController = async (req: Request, res: Response) => {
  const { day, hour, team1, team2 } = req.body;

  const newMatch = await matchesCreateService({ day, hour, team1, team2 });

  return res.status(201).json(newMatch);
};

export default matchesCreateController;
