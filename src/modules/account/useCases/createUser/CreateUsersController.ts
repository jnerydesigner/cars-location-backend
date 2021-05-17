import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUsersUseCase } from "./CreateUsersUseCase";

class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, driver_license, password } = request.body;

    const createUsersUseCase = container.resolve(CreateUsersUseCase);

    await createUsersUseCase.execute({
      name,
      email,
      driver_license,
      password,
    });

    return response.status(201).json({ message: "User inserted succefuly" });
  }
}

export { CreateUsersController };
