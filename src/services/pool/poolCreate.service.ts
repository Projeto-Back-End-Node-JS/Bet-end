import { Pool } from "../../entities/pool.entity";
import AppDataSource from "../../data-source";
import { IPoolRequest } from "../../interfaces/pool/pool.interfaces";

const poolCreateService = async ({
  name,
  owner,
  poolUsers,
  poolMatches,
}: IPoolRequest) => {
  const poolRepository = AppDataSource.getRepository(Pool);

  const pool = poolRepository.create({
    name,
    owner,
    poolUsers,
    poolMatches,
  });

  await poolRepository.save(pool);

  return pool;
};

export default poolCreateService;
