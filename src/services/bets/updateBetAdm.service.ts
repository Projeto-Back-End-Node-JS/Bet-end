import AppDataSource from "../../data-source";
import { Bet } from "../../entities/bet.entity";
import { AppError } from "../../errors/appError";
import { IBetUpdate } from "../../interfaces/bet";

const updateBetAdmService = async (
  idBet: string,
  { result, score }: IBetUpdate,
  userId: string
) => {
  const betRepository = AppDataSource.getRepository(Bet);

  const findBet = await betRepository.findOneBy({ id: idBet });

  if (!findBet) {
    throw new AppError(404, "Bet not found!");
  }

  const findOwnerBet = await betRepository.findOne({
    where: {
      id: idBet,
    },
    relations: {
      user: true,
    },
  });

  if (findOwnerBet?.user.id !== userId) {
    throw new AppError(404, "You are not the owner of the bet");
  }

  await betRepository.update(idBet, {
    result: result ? result : findBet.result,
    score: score ? score : findBet.score,
  });

  const bet = await betRepository.findOneBy({ id: idBet });

  return bet;
};

export default updateBetAdmService;
