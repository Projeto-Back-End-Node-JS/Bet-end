import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const userDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  await userRepository.delete(user!.id);

  return true;
};

export default userDeleteService;
