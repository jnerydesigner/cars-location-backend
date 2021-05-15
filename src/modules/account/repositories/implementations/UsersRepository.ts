import { ICreateUserDTO } from "modules/account/dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { IUsersRepositories } from "../IUsersRepositories";

class UsersRepository implements IUsersRepositories {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findByUserName(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });

    return user;
  }

  async create({
    name,
    username,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
