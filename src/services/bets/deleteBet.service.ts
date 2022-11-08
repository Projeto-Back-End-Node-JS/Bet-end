import AppDataSource from "../../data-source";
import { Bet } from "../../entities/bet.entity";
import { AppError } from "../../errors/appError";

const deleteBetService = async (idBet: string) => {
  const betRepository = AppDataSource.getRepository(Bet);

  const findBet = await betRepository.findOneBy({ id: idBet });

  if (!findBet) {
    throw new AppError(404, "Bet not found");
  }

  await betRepository.delete(findBet!.id);

  return "Bet deleted with success";
};

export default deleteBetService;
