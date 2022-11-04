import AppDataSource from "../../data-source";
import bcrypt from "bcrypt";

import { IUserRequest } from "../../interfaces/user";
import { User } from "../../entities/user.entity";

const userCreateService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = bcrypt.hashSync(password, 10);
  newUser.isAdm = isAdm;

  userRepository.create(newUser);

  await userRepository.save(newUser);

  return newUser;
};

export default userCreateService;
