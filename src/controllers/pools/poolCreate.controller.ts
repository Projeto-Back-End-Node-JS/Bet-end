import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import poolCreateService from "../../services/pools/poolCreate.service";

const poolCreateController = async (req: Request, res: Response) => {
  try {
    const poolRequest = req.body.name;
    const owner = req.user.userId;
    const poolCreate = await poolCreateService(poolRequest, owner);

    return res.status(201).json(poolCreate);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default poolCreateController;
