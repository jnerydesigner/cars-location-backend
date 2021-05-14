/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

class ListSpecificationController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const specification = await this.listSpecificationsUseCase.execute();

    return response.status(201).json({ specification });
  }
}

export { ListSpecificationController };