import AppDataSource from "../../data-source";
import { Bet } from "../../entities/bet.entity";
import { Matches } from "../../entities/matches.entity";

const updateResultBetService = async (betId: string) => {
  const matchesRepository = AppDataSource.getRepository(Matches);
  const betsRepository = AppDataSource.getRepository(Bet);

  const match = await matchesRepository.findOneBy({
    id: betId,
  });

  const bet = await betsRepository.findOneBy({
    id: betId,
  });

  let betPoints = 0;

  if (bet!.result === match!.result) {
    betPoints = betPoints + 3;
  }

  if (bet!.score === match!.score) {
    betPoints = betPoints + 2;
  }

  await betsRepository.update(betId, {
    points: betPoints,
  });

  return bet;
};

export default updateResultBetService;
