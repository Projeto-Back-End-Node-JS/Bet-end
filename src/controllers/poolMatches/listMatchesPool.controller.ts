import { Request, Response } from "express";
import listMatchesPoolService from "../../services/poolMatches/listMatchesPool.service";

const listMatchesPoolController = async (req: Request, res: Response) => {
  const idPool: string = req.params.id;
  const listMatchesPool = await listMatchesPoolService(idPool);
  res.json(listMatchesPool);
};

export default listMatchesPoolController;
