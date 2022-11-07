import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { PoolUsers } from "../../entities/poolUsers.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IPoolUsers } from "../../interfaces/poolUsers";

const createPoolUsersService = async ({ poolId, userId }: IPoolUsers) => {
  const poolUserRepository = AppDataSource.getRepository(PoolUsers);

  const poolRepository = AppDataSource.getRepository(Pool);
  const userRepository = AppDataSource.getRepository(User);

  const pool = await poolRepository.findOneBy({ id: poolId });
  const user = await userRepository.findOneBy({ id: userId });

  if (!pool) {
    throw new AppError(404, "Pool not exist");
  }

  if (!user) {
    throw new AppError(404, "User not exist");
  }

  const addUser = poolUserRepository.create({
    pool: pool,
    user: user,
  });

  await poolUserRepository.save(addUser);

  return addUser;
};

export default createPoolUsersService;
