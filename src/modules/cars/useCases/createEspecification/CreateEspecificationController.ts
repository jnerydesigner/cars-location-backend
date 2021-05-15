/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { container } from 'tsyringe'

import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

class CreateEspecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createSpecificationUseCase = container.resolve(CreateSpecificationsUseCase)

    await createSpecificationUseCase.execute({ name, description });

    return res
      .status(201)
      .json({ message: "Specification insert with successful" });
  }
}

export { CreateEspecificationController };
