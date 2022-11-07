import { Request, Response } from "express";
import matchListService from "../../services/matches/matchList.service";

const matchListController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const matchList = await matchListService(id);

  return res.status(200).send(matchList);
};

export default matchListController;
