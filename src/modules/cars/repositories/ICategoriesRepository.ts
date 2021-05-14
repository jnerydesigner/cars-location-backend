import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
  created_at?: string;
}

interface ICategoriesRepository {
  findByNameCategory(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
