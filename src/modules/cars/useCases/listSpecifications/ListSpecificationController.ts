/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

class ListSpecificationController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) { }

  handle(request: Request, response: Response): Response {
    const specification = this.listSpecificationsUseCase.execute();

    return response.status(201).json({ specification });
  }
}

export { ListSpecificationController };