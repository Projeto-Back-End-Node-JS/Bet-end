import { Request, Response } from "express";
import deletePoolMatchService from "../../services/poolMatches/deletePoolMatches.service";

const deletePoolMatchController = async (req: Request, res: Response) => {
  const idOwner: string = req.user.id!;
  const idMatch: string = req.params.id;
  const deleteMatch = await deletePoolMatchService(idMatch, idOwner);
  res.status(204).json(deleteMatch);
};

export default deletePoolMatchController;
