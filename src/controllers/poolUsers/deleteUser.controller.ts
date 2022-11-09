import { Request, Response } from "express";
import deleteUserService from "../../services/poolUsers/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const idUser: string = req.params.id;
  const idOwner: string = req.user.id!;
  const deleteUser = await deleteUserService(idUser, idOwner);
  res.status(204).json(deleteUser);
};

export default deleteUserController;
