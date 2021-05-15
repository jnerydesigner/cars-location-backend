import { Router, Request, Response } from "express";

import { CreateEspecificationController } from "../modules/cars/useCases/createEspecification/CreateEspecificationController";
import listSpecificationController from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();
const createEspecificationController = new CreateEspecificationController();

specificationsRoutes.post("/", createEspecificationController.handle);

specificationsRoutes.get("/", (req: Request, res: Response) => {
  return listSpecificationController().handle(req, res);
});

export { specificationsRoutes };
