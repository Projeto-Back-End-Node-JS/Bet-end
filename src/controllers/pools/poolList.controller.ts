import listPoolService from "../../services/pools/poolList.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";

const listPoolController = async (req: Request, res: Response) => {
  try {
    const pool = await listPoolService();

    return res.status(200).json(pool);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listPoolController;
