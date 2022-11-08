import { Request, Response } from "express";
import { IBetRequest } from "../../interfaces/bet";
import createBetService from "../../services/bets/createBet.service";

const createBetController = async (req: Request, res: Response) => {
  const bet: IBetRequest = req.body;
  const createBet = await createBetService(bet);
  res.status(201).json(createBet);
};

export default createBetController;
