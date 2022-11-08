import { Request, Response } from "express";
import deletePoolMatchService from "../../services/poolMatches/deletePoolMatches.service";

const deletePoolMatchController = async (req: Request, res: Response) => {
  const idMatch: string = req.params.id;
  const deleteMatch = await deletePoolMatchService(idMatch);
  res.status(204).json(deleteMatch);
};

export default deletePoolMatchController;
