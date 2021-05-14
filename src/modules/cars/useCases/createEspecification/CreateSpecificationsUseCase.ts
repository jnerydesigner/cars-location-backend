/* eslint-disable prettier/prettier */

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
  name: string;
  description: string;
}


class CreateSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) { }
  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByNameSpecification(
      name
    );

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description
    })
  }
}

export { CreateSpecificationsUseCase };
