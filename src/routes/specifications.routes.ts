import { Router, Request, Response } from "express";

import createSpecificationController from "../modules/cars/useCases/createEspecification";
import listSpecificationController from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req: Request, res: Response) => {
  return createSpecificationController().handle(req, res);
});

specificationsRoutes.get("/", (req: Request, res: Response) => {
  return listSpecificationController().handle(req, res);
});

export { specificationsRoutes };
