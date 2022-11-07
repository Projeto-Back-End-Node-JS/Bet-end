import { Request, Response } from "express";
import listBetsUserService from "../../services/bets/listBetsUser.service";

const listBetsUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const listBets = await listBetsUserService(userId);
  res.json(listBets);
};

export default listBetsUserController;
