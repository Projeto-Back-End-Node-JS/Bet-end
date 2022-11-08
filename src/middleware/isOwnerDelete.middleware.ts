import { Request, Response, NextFunction } from "express";
import { Pool } from "../entities/pool.entity";
import AppDataSource from "../data-source";
import { AppError } from "../errors/appError";
import { PoolMatches } from "../entities/poolMatches.entity";

const isOwnerDeleteMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const poolMatchesRepository = AppDataSource.getRepository(PoolMatches);
  const id = req.params.id;

  const poolMatches = await poolMatchesRepository.findOneBy({
    id,
  });

  const owner = poolMatches?.pool?.owner.id === req.user.id;
  console.log(poolMatches);
  console.log(req.user.id);

  if (!poolMatches) {
    throw new AppError(400, "Pool not found");
  }

  if (!owner) {
    throw new AppError(400, "Missing permition");
  }

  next();
};

export default isOwnerDeleteMiddleware;
