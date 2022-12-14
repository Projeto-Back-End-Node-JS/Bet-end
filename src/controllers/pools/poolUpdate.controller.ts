import updatePoolService from "../../services/pools/poolUpdate.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { instanceToInstance } from "class-transformer";

const updatePoolController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const pool = req.body.name;
    const idOwner = req.user.id;
    const updatePool = await updatePoolService(id, pool, idOwner!);
    return res.status(200).json(instanceToInstance(updatePool));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default updatePoolController;
