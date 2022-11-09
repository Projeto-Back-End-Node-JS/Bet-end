import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { AppError } from "../../errors/appError";

const updatePoolService = async (id: string, name: string) => {
  const poolRepository = AppDataSource.getRepository(Pool);
  const pool = poolRepository.findOneBy({
    id,
  });
  if (!pool) {
    throw new AppError(400, "User not found");
  }

  const updatedPool = await poolRepository.update(id, {
    name,
  });

  const newPool = await poolRepository.findOneBy({
    id,
  });

  return newPool;
};

export default updatePoolService;
