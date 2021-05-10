import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateEspecificationController } from "./CreateEspecificationController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

const specifictionRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationsUseCase(
  specifictionRepository
);

const createSpecificationController = new CreateEspecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
