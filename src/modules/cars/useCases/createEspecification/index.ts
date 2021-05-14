import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateEspecificationController } from "./CreateEspecificationController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

export default (): CreateEspecificationController => {
  const specifictionRepository = new SpecificationRepository();

  const createSpecificationUseCase = new CreateSpecificationsUseCase(
    specifictionRepository
  );

  const createSpecificationController = new CreateEspecificationController(
    createSpecificationUseCase
  );

  return createSpecificationController;
};
