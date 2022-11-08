import { Request, Response } from "express";
import deleteBetService from "../../services/bets/deleteBet.service";

const deleteBetController = async (req: Request, res: Response) => {
  const idBet: string = req.params.id;
  const deleteBet = await deleteBetService(idBet);
  res.status(204).send(deleteBet);
};

export default deleteBetController;
