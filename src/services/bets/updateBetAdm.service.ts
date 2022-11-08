import AppDataSource from "../../data-source";
import { Bet } from "../../entities/bet.entity";
import { AppError } from "../../errors/appError";
import { IBetUpdateAdm } from "../../interfaces/bet";

const updateBetAdmService = async (
  idBet: string,
  { points }: IBetUpdateAdm
) => {
  const betRepository = AppDataSource.getRepository(Bet);

  const findBet = await betRepository.findOneBy({ id: idBet });

  if (!findBet) {
    throw new AppError(404, "Bet not found!");
  }

  await betRepository.update(idBet, {
    points: points ? points : findBet.points,
  });

  const bet = await betRepository.findOneBy({ id: idBet });

  return bet;
};

export default updateBetAdmService;
