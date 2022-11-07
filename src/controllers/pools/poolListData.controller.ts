import listDataPoolService from "../../services/pools/poolListData.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";

const listDataPoolController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const pool = await listDataPoolService(id);
    return res.status(200).json(pool);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listDataPoolController;
