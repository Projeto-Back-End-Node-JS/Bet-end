import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { IPoolRequest } from "../../interfaces/pools";
import poolCreateService from "../../services/pools/poolCreate.service";

const poolCreateController = async (req: Request, res: Response) => {
  const pool: IPoolRequest = req.body;
  const createPool = await poolCreateService(pool);
  res.status(201).json(instanceToInstance(createPool));
};

export default poolCreateController;
