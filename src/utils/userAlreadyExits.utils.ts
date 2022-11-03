import { User } from "../entities/user";
import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/appError";

const userAlreadyExitsUtils = async (req: Request, res: Response) => {
  const { email } = req.body;

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (user) {
    throw new AppError(400, "User Already Exists");
  }
};

export default userAlreadyExitsUtils;
