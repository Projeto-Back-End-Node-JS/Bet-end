import { Request, Response, NextFunction } from "express";
import { Pool } from "../entities/pool.entity";
import AppDataSource from "../data-source";
import { AppError } from "../errors/appError";

const isOwner = async (req: Request, res: Response, next: NextFunction) => {
  const poolRepository = AppDataSource.getRepository(Pool);
  const id = req.params.id;
  const pool = await poolRepository.findOneBy({
    id,
  });
  const owner = pool?.owner === req.user.userId;
  const isAdm = req.user.isAdm;
  if (!pool) {
    throw new AppError(400, "Pool not found");
  }
  if (!owner && !isAdm) {
    throw new AppError(400, "Missing adm permition");
  }

  next();
};

export default isOwner;
