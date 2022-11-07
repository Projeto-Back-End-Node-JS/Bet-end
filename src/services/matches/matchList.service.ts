import AppDataSource from "../../data-source";
import { Matches } from "../../entities/matches.entity";
import { Pool } from "../../entities/pool.entity";
import { AppError } from "../../errors/appError";

const matchListService = async (id: string) /* : Promise<Matches> */ => {
  const poolRepository = AppDataSource.getRepository(Pool);
  const matchRepository = AppDataSource.getRepository(Matches);

  const pool = await poolRepository.findOneBy({
    id: id,
  });
  if (!pool) {
    throw new AppError(404, "Pool not found");
  }

  const matchList = await matchRepository.find({
    where: {
      pool: {
        id: pool.id,
      },
    },
  });

  console.log(matchList);
  return matchList;
};

export default matchListService;
