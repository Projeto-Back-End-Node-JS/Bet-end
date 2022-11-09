import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { IPoolUsers } from "../../interfaces/poolUsers";
import createPoolUsersService from "../../services/poolUsers/createPoolUsers.service";

const createPoolUsersController = async (req: Request, res: Response) => {
  const idOwner: string = req.user.id!;
  const poolUsers: IPoolUsers = req.body;
  const createPoolUsers = await createPoolUsersService(poolUsers, idOwner);
  res.status(201).json(instanceToInstance(createPoolUsers));
};

export default createPoolUsersController;
