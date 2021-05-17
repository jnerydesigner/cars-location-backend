import { Router, Request, Response } from "express";
import multer from "multer";

import { CreateEspecificationController } from "../modules/cars/useCases/createEspecification/CreateEspecificationController";
import { ImportSpecificationController } from "../modules/cars/useCases/importSpecification/ImportSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecifications/ListSpecificationController";

const specificationsRoutes = Router();
const createEspecificationController = new CreateEspecificationController();
const importSpecificationController = new ImportSpecificationController();
const listSpecificationController = new ListSpecificationController();

const upload = multer({
  dest: "./tmp",
});

specificationsRoutes.post("/", createEspecificationController.handle);

specificationsRoutes.get("/", listSpecificationController.handle);

specificationsRoutes.post(
  "/import",
  upload.single("file"),
  importSpecificationController.handle
);

export { specificationsRoutes };
