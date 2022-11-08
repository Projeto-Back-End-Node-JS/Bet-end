import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";

const deletePoolService = async (id: string) => {
  const poolRepository = AppDataSource.getRepository(Pool);

  await poolRepository.delete({
    id,
  });
};

export default deletePoolService;
