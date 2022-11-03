import { User } from "../../entities/user";
import AppDataSource from "../../data-source";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";
import { IUserRequest } from "../../interfaces/user";

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
