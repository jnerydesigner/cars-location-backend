/* eslint-disable prettier/prettier */
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepositories } from "../../repositories/IUsersRepositories";

interface IAuthenticateDTO {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepositories
  ) { }

  async execute({ email, password }: IAuthenticateDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByUserEmail(email);

    if (!user) {
      throw new Error("Email or Password is wrong");
    }

    const comparePassword = await compare(password, user.password);

    if (!comparePassword) {
      throw new Error("Email or Password is wrong");
    }

    const token = sign({}, process.env.HASH_JWT_SECURITY, {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      }
    }

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
