import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/appError";
import { Matches } from "../entities/matches.entity";

const matchAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { team1, team2, day } = req.body;

  const matchesRepository = AppDataSource.getRepository(Matches);

  const match = await matchesRepository.findOneBy({
    team1: team1,
    team2: team2,
    day: day,
  });

  if (match) {
    throw new AppError(409, "Match already exists");
  }

  next();
};

export default matchAlreadyExists;
