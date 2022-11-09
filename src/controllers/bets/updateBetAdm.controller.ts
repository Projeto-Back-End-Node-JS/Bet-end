import { Request, Response } from "express";
import { IBetUpdate } from "../../interfaces/bet";
import updateBetAdmService from "../../services/bets/updateBetAdm.service";

const updateBetAdmController = async (req: Request, res: Response) => {
  const userId: string = req.user.id!;
  const idBet: string = req.params.id;
  const bet: IBetUpdate = req.body;
  const updateBet = await updateBetAdmService(idBet, bet, userId);
  res.json(updateBet);
};

export default updateBetAdmController;
