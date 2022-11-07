import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userAlreadyDeletedUtils = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.findOneBy({ id });

  //   if (!user.isActive) {
  //     throw new AppError(400, "User Already Deleted");
  //   }

  next();
};

export default userAlreadyDeletedUtils;
