import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { Matches } from "../../entities/matches.entity";
import { PoolMatches } from "../../entities/poolMatches.entity";
import { IPoolMatches } from "../../interfaces/matches";
import { AppError } from "../../errors/appError";

const poolMatchesCreateService = async ({
  poolId,
  matchesId,
}: IPoolMatches) => {
  const poolMatchesRepository = AppDataSource.getRepository(PoolMatches);
  const poolRepository = AppDataSource.getRepository(Pool);
  const matchesRepository = AppDataSource.getRepository(Matches);

  const pool = await poolRepository.findOneBy({
    id: poolId,
  });
  if (!pool) {
    throw new AppError(404, "Pool not exist");
  }

  const match = await matchesRepository.findOneBy({
    id: matchesId,
  });
  if (!match) {
    throw new AppError(404, "Match not exist");
  }

  const newPoolMatch = poolMatchesRepository.create({
    matches: match,
    pool: pool,
  });

  await poolMatchesRepository.save(newPoolMatch);

  return newPoolMatch;
};

export default poolMatchesCreateService;
