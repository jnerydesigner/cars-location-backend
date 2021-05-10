import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
  created_at?: string;
}

interface ICategoriesRepository {
  findByNameCategory(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
