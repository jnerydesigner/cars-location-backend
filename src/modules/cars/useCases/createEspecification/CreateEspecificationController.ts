/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

class CreateEspecificationController {
  constructor(
    private createEspecificationUseCase: CreateSpecificationsUseCase
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    await this.createEspecificationUseCase.execute({ name, description });

    return res
      .status(201)
      .json({ message: "Specification insert with successful" });
  }
}

export { CreateEspecificationController };
