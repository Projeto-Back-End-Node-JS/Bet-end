import AppDataSource from "../../data-source";
import { Matches } from "../../entities/matches.entity";
import { Pool } from "../../entities/pool.entity";
import { PoolMatches } from "../../entities/poolMatches.entity";
import { AppError } from "../../errors/appError";
import { IPoolMatches } from "../../interfaces/match";

const createPoolMatchesService = async ({
  matchesId,
  poolId,
}: IPoolMatches) => {
  const poolMatchesRepository = AppDataSource.getRepository(PoolMatches);

  const poolRepository = AppDataSource.getRepository(Pool);
  const matcheRepository = AppDataSource.getRepository(Matches);

  const pool = await poolRepository.findOneBy({ id: poolId });
  const matche = await matcheRepository.findOneBy({ id: matchesId });

  if (!pool) {
    throw new AppError(404, "Pool if not exist");
  }

  if (!matche) {
    throw new AppError(404, "Matche if not exist");
  }

  const poolMatches = poolMatchesRepository.create({
    matches: matche,
    pool: pool,
  });

  await poolMatchesRepository.save(poolMatches);

  return poolMatches;
};

export default createPoolMatchesService;
