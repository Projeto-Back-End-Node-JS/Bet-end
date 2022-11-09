import AppDataSource from "../../data-source";
import { PoolUsers } from "../../entities/poolUsers.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (idUser: string) => {
  const poolUserRepository = AppDataSource.getRepository(PoolUsers);

  const findUser = await poolUserRepository.findOneBy({ id: idUser });

  if (!findUser) {
    throw new AppError(404, "User not found");
  }

  await poolUserRepository.delete(findUser!.id);

  return { message: "User deleted" };
};

export default deleteUserService;
