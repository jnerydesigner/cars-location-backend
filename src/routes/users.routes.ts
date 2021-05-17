import { Router } from "express";

import { CreateUsersController } from "../modules/account/useCases/createUser/CreateUsersController";
import { ListUsersController } from "../modules/account/useCases/listUsers/ListUsersController";

const usersRoutes = Router();
const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();

usersRoutes.post("/", createUsersController.handle);
usersRoutes.get("/", listUsersController.handle);

export { usersRoutes };
