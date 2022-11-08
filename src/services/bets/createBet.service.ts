import AppDataSource from "../../data-source";
import { Bet } from "../../entities/bet.entity";
import { Matches } from "../../entities/matches.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IBetRequest } from "../../interfaces/bet";

const createBetService = async ({
  matchId,
  result,
  score,
  userId,
}: IBetRequest) => {
  const betRepository = AppDataSource.getRepository(Bet);

  const matchRepository = AppDataSource.getRepository(Matches);
  const userRepository = AppDataSource.getRepository(User);

  const match = await matchRepository.findOneBy({ id: matchId });
  const user = await userRepository.findOneBy({ id: userId });

  if (!match) {
    throw new AppError(404, "Match not exist");
  }

  if (!user) {
    throw new AppError(404, "User not exist");
  }

  const createBet = betRepository.create({
    result,
    score,
    matches: match,
    user: user,
  });

  await betRepository.save(createBet);

  return createBet;
};

export default createBetService;
