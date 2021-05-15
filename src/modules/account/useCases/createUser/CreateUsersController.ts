import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUsersUseCase } from "./CreateUsersUseCase";

class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, driver_license, password, username } = request.body;

    const createUsersUseCase = container.resolve(CreateUsersUseCase);

    console.log(createUsersUseCase);

    await createUsersUseCase.execute({
      name,
      email,
      driver_license,
      password,
      username,
    });

    return response
      .status(201)
      .json({ message: "User insert with successful" });
  }
}

export { CreateUsersController };
