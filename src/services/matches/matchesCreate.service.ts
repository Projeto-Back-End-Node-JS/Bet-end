import { AppError } from "./../../errors/appError";
import AppDataSource from "../../data-source";
import { Matches } from "../../entities/matches.entity";
import { IMatchesRequest } from "./../../interfaces/matches/index";
import { Pool } from "../../entities/pool.entity";

const matchesCreateService = async (
  { day, hour, team1, team2 }: IMatchesRequest,
  poolId: string
): Promise<Matches> => {
  const matchesRepository = AppDataSource.getRepository(Matches);
  const poolRepository = AppDataSource.getRepository(Pool);

  const pool = await poolRepository.findOneBy({
    id: poolId,
  });
  if (!pool) {
    throw new AppError(404, "Pool not found");
  }

  const newMatch = matchesRepository.create({
    day,
    hour,
    team1,
    team2,
  });

  await matchesRepository.save(newMatch);

  return newMatch;
};

export default matchesCreateService;
