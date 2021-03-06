/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe';

import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationsRepository
  ) { }

  async execute(): Promise<Specification[]> {
    const specification = await this.specificationRepository.list();

    return specification;
  }
}

export { ListSpecificationsUseCase };
