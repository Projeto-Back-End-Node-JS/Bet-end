import { Request, Response } from "express";
import { IBetUpdateAdm } from "../../interfaces/bet";
import updateBetAdmService from "../../services/bets/updateBetAdm.service";

const updateBetAdmController = async (req: Request, res: Response) => {
  const idBet: string = req.params.id;
  const bet: IBetUpdateAdm = req.body;
  const updateBet = await updateBetAdmService(idBet, bet);
  res.json(updateBet);
};

export default updateBetAdmController;
