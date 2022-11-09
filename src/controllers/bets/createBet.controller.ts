import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { IBetRequest } from "../../interfaces/bet";
import createBetService from "../../services/bets/createBet.service";

const createBetController = async (req: Request, res: Response) => {
  const bet: IBetRequest = req.body;
  const userId: string = req.user.id!;
  const createBet = await createBetService(bet, userId);
  res.status(201).json(instanceToInstance(createBet));
};

export default createBetController;
