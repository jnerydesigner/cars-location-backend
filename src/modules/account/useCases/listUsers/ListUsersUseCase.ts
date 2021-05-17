/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUsersRepositories } from "../../repositories/IUsersRepositories";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepositories
  ) { }


  async execute(): Promise<User[]> {
    const user = await this.usersRepository.list();

    return user;
  }
}

export { ListUsersUseCase };
