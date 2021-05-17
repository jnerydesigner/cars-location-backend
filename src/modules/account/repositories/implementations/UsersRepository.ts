import { ICreateUserDTO } from "modules/account/dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { IUsersRepositories } from "../IUsersRepositories";

class UsersRepository implements IUsersRepositories {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }

  async findByUserEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
