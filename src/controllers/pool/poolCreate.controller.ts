import { Request, Response } from "express";
import poolCreateService from "../../services/pool/poolCreate.service";

const poolCreateController = async (req: Request, res: Response) => {
  try {
    const poolRequest = req.body;
    const poolCreate = await poolCreateService(poolRequest);

    return res.status(201).json(poolCreate);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default poolCreateController;
