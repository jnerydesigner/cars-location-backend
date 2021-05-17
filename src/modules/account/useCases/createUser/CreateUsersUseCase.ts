/* eslint-disable prettier/prettier */
import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepositories } from '../../repositories/IUsersRepositories';


@injectable()
class CreateUsersUseCase {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepositories
  ) {

  }



  async execute({ name, password, driver_license, email }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByUserEmail(
      email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const hashPassword = await hash(password, 8);


    await this.usersRepository.create({
      name,
      email,
      driver_license,
      password: hashPassword
    });
  }
}



export { CreateUsersUseCase }