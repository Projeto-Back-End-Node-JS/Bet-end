import { Request, Response } from "express";
import { IPoolMatches } from "../../interfaces/poolMatches";
import createPoolMatchesService from "../../services/poolMatches/createPoolMatches.service";

const createPoolMatchesController = async (req: Request, res: Response) => {
  const idOwner: string = req.user.id!;
  const poolMatches: IPoolMatches = req.body;
  const createPoolMatches = await createPoolMatchesService(
    poolMatches,
    idOwner
  );
  res.status(201).json(createPoolMatches);
};

export default createPoolMatchesController;
