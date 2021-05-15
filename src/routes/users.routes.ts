import { Router } from "express";

import { CreateUsersController } from "../modules/account/useCases/createUser/CreateUsersController";

const usersRoutes = Router();
const createUsersController = new CreateUsersController();

usersRoutes.post("/", createUsersController.handle);

export { usersRoutes };
