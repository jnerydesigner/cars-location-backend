/* eslint-disable prettier/prettier */
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";


class ListCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) { }
  execute(): Category {
    const category = this.categoriesRepository.list();
  }
}

export { ListCategoryService };
