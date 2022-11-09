import { Request, Response } from "express";
import deleteBetService from "../../services/bets/deleteBet.service";

const deleteBetController = async (req: Request, res: Response) => {
  const idBet: string = req.params.id;
  const idUser: string = req.user.id!;
  const deleteBet = await deleteBetService(idBet, idUser);
  res.status(204).send(deleteBet);
};

export default deleteBetController;
