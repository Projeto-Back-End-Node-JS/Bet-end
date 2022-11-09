import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import listUsersPoolService from "../../services/poolUsers/listUsersPool.service";

const listUsersPoolController = async (req: Request, res: Response) => {
  const idPool: string = req.params.id;
  const listUser = await listUsersPoolService(idPool);
  res.json(instanceToInstance(listUser));
};

export default listUsersPoolController;
