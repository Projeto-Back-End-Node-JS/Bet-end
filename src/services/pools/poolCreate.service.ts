import { Pool } from "../../entities/pool.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";

const poolCreateService = async (name: string, owner: any) => {
  const poolRepository = AppDataSource.getRepository(Pool);

  const poolName = poolRepository.findOneBy({
    name,
  });

  if (!poolName) {
    throw new AppError(400, "Pool already exist");
  }
  const pool = poolRepository.create({
    name,
    owner,
  });

  await poolRepository.save(pool);

  return pool;
};

export default poolCreateService;
