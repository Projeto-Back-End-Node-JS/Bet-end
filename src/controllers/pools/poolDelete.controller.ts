import deletePoolService from "../../services/pools/poolDelete.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";

const deletePoolController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await deletePoolService(id);

    return res.status(200).json({
      message: "Pool deleted with sucess",
    });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default deletePoolController;
