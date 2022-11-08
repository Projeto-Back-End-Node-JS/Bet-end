import { Request, Response } from "express";
import updateResultBetService from "../../services/bets/updateResultBet.service";

const updateResultBetController = async (req: Request, res: Response) => {
  const betId: string = req.params.id;

  const updateBet = await updateResultBetService(betId);

  res.status(200).json(updateBet);
};

export default updateResultBetController;
