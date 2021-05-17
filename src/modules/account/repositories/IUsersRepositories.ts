import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepositories {
  create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void>;
  findByUserEmail(email: string): Promise<User>;
  list(): Promise<User[]>;
}

export { IUsersRepositories };
