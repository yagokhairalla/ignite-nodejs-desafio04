import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.headers;

    if (Array.isArray(user_id)) {
      throw new Error("Id must be a string and not an array");
    }

    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(allUsers);
    } catch (err) {
      return response.status(400).json({ error: err });
    }

  }
}

export { ListAllUsersController };
