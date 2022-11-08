import { Request, Response } from "express";
import { IPoolMatches } from "../../interfaces/matches";
import poolMatchesCreateService from "../../services/poolMatches/poolMatchesCreate.service";

const poolMatchesCreateController = async (req: Request, res: Response) => {
  const match: IPoolMatches = req.body;

  const newPoolMatch = await poolMatchesCreateService(match);

  return res.status(201).send({
    message: "Match added with success",
  });
};

export default poolMatchesCreateController;
