import AppDataSource from "../../data-source";
import { Matches } from "../../entities/matches.entity";
import { AppError } from "../../errors/appError";

const matchDeleteService = async (matchId: string) => {
  const matchRepository = AppDataSource.getRepository(Matches);

  const match = await matchRepository.findOneBy({
    id: matchId,
  });
  if (!match) {
    throw new AppError(404, "Match not found");
  }

  await matchRepository.delete(match!.id);
};

export default matchDeleteService;
