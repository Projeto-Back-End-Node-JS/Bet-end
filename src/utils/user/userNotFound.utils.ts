import { Request, Response, NextFunction } from "express";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";

const userNotFoundUtils = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  next();
};

export default userNotFoundUtils;
