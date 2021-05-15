/* eslint-disable prettier/prettier */
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



  async execute({ name, username, password, driver_license, email }: ICreateUserDTO): Promise<void> {
    console.log(username)
    const userAlreadyExists = await this.usersRepository.findByUserName(
      username
    );

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    await this.usersRepository.create({ name, email, driver_license, password, username });
  }
}



export { CreateUsersUseCase }