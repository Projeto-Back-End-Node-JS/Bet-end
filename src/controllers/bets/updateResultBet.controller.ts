import { Request, Response } from "express";
import updateResultBetService from "../../services/bets/updateResultBet.service";

const updateResultBetController = async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);

  const updateBet = await updateResultBetService(id);

  res.status(200).json(updateBet);
};

export default updateResultBetController;
