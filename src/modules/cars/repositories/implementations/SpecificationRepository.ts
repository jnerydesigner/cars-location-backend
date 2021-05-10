import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  list(): Specification[] {
    return this.specifications;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByNameSpecification(name: string): Specification {
    const specificationFindName = this.specifications.find(
      (specification) => specification.name === name
    );

    return specificationFindName;
  }
}

export { SpecificationRepository };
