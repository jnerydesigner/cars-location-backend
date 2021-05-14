import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export default (): ListSpecificationController => {
  const specificationRepository = new SpecificationRepository();

  const listSpecificationUseCase = new ListSpecificationsUseCase(
    specificationRepository
  );

  const listSpecificationController = new ListSpecificationController(
    listSpecificationUseCase
  );

  return listSpecificationController;
};
