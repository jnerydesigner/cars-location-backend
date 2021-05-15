import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepositories {
  create({
    name,
    username,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void>;
  findByUserName(username: string): Promise<User>;
}

export { IUsersRepositories };
