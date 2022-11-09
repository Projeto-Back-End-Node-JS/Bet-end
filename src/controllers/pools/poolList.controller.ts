import listPoolService from "../../services/pools/poolList.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { instanceToInstance } from "class-transformer";

const listPoolController = async (req: Request, res: Response) => {
  try {
    const pool = await listPoolService();

    return res.status(200).json(instanceToInstance(pool));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listPoolController;
