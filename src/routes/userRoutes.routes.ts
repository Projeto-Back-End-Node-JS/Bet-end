import { Router } from "express";
import userCreateController from "../controllers/user/userCreate.controller";
import userDeleteController from "../controllers/user/userDelete.controller";
import userListController from "../controllers/user/userList.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";

import userAlreadyExitsUtils from "../utils/user/userAlreadyExits.utils";
import userNotFoundUtils from "../utils/user/userNotFound.utils";
import userUpdatePasswordUtils from "../utils/user/userUpdatePassword.utils";
import tokenMiddleware from "../middleware/tokenAuth.middleware";
import { isAdmUser } from "../middleware/isUserAdm.middleware";
import verifyUpdateFieldsUtils from "../utils/user/verifyUpdateFields.utils";

const userRoutes = Router();

userRoutes.post("", userAlreadyExitsUtils, userCreateController);
userRoutes.get("", tokenMiddleware, isAdmUser, userListController);
userRoutes.patch(
  "/:id",
  tokenMiddleware,
  isAdmUser,
  userNotFoundUtils,
  verifyUpdateFieldsUtils,
  userUpdatePasswordUtils,
  userUpdateController
);
userRoutes.delete(
  "/:id",
  tokenMiddleware,
  isAdmUser,
  userNotFoundUtils,
  userDeleteController
);

export default userRoutes;
