/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { container } from 'tsyringe'

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

class ListSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationUseCase = container.resolve(ListSpecificationsUseCase);
    const specification = await listSpecificationUseCase.execute();

    return response.status(201).json({ specification });
  }

}

export { ListSpecificationController };