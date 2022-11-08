import AppDataSource from "../../data-source";
import { PoolMatches } from "../../entities/poolMatches.entity";
import { AppError } from "../../errors/appError";

const deletePoolMatchService = async (idMatch: string) => {
  const poolMatchesRepository = AppDataSource.getRepository(PoolMatches);

  const findMatch = await poolMatchesRepository.findOneBy({ id: idMatch });

  if (!findMatch) {
    throw new AppError(404, "Matche not found");
  }

  await poolMatchesRepository.delete(findMatch!.id);

  return { message: "Matche deleted" };
};

export default deletePoolMatchService;
