import { Request, Response } from "express";
import createPoolService from "../../services/pools/poolCreate.service";
import { IPoolRequest } from "../../interfaces/pool.interfaces";

const createPoolController = async (req: Request, res: Response) => {
  const pool: IPoolRequest = req.body;

  const createPool = await createPoolService(pool);

  res.status(201).json(createPool);
};

export default createPoolController;
