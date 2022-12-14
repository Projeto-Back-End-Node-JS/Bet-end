import { Request, Response } from "express";
import matchesCreateService from "../../services/matches/matchesCreate.service";

const matchesCreateController = async (req: Request, res: Response) => {
  const match = req.body;

  const newMatch = await matchesCreateService(match);

  return res.status(201).json(newMatch);
};

export default matchesCreateController;
