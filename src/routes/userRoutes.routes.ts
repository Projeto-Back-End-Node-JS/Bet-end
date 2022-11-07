import { Router } from "express";
import userCreateController from "../controllers/user/userCreate.controller";
import userDeleteController from "../controllers/user/userDelete.controller";
import userListController from "../controllers/user/userList.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import userAlreadyExitsUtils from "../utils/user/userAlreadyExits.utils";
import userNotFoundUtils from "../utils/user/userNotFound.utils";
import userUpdatePasswordUtils from "../utils/user/userUpdatePassword.utils";

const userRoutes = Router();

userRoutes.post("", userAlreadyExitsUtils, userCreateController);
userRoutes.get("", userListController);
userRoutes.patch(
  "/:id",
  userNotFoundUtils,
  userUpdatePasswordUtils,
  userUpdateController
);
userRoutes.delete("/:id", userNotFoundUtils, userDeleteController);

export default userRoutes;
