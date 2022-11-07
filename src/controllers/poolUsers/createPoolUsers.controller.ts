import { Request, Response } from "express";
import { IPoolUsers } from "../../interfaces/poolUsers";
import createPoolUsersService from "../../services/poolUsers/createPoolUsers.service";

const createPoolUsersController = async (req: Request, res: Response) => {
  const poolUsers: IPoolUsers = req.body;
  const createPoolUsers = await createPoolUsersService(poolUsers);
  res.status(201).json(createPoolUsers);
};

export default createPoolUsersController;
