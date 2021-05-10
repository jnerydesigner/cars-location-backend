/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

class CreateEspecificationController {
  constructor(
    private createEspecificationUseCase: CreateSpecificationsUseCase
  ) { }
  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createEspecificationUseCase.execute({ name, description });

    return res
      .status(201)
      .json({ message: "Specification insert with successful" });
  }
}

export { CreateEspecificationController };
