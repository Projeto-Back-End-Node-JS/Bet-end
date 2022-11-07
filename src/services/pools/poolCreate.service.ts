import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IPoolRequest } from "./../../interfaces/pool.interfaces";

const createPoolService = async ({ name, owner }: IPoolRequest) => {
  const poolRepository = AppDataSource.getRepository(Pool);
  const userRepository = AppDataSource.getRepository(User);

  const userOwner = await userRepository.findOneBy({ id: owner });

  if (!userOwner) {
    throw new AppError(404, "User not exist");
  }

  const pool = poolRepository.create({
    name,
    owner: userOwner,
  });

  await poolRepository.save(pool);

  return pool;
};

export default createPoolService;
