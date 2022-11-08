import { Request, Response } from "express";
import deletePoolMatchService from "../../services/poolMatches/deletePoolMatches.service";

const deletePoolMatchController = async (req: Request, res: Response) => {
  const idMatch: string = req.params.id;
  const deleteMatch = await deletePoolMatchService(idMatch);
  return res.status(204).send({ message: "Match deleted" });
};

export default deletePoolMatchController;
