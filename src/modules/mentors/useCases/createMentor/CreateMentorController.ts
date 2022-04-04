import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateMentorUseCase } from '@modules/mentors/useCases/createMentor/CreateMentorUserCase';

class CreateMentorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name, 
      email,
      password,
      driver_license
    } = req.body;
    const createMentorUseCase = container.resolve(CreateMentorUseCase);
    await createMentorUseCase.execute({
      name, 
      email,
      password
    });
    return res.status(201).send();
  }
}

export { CreateMentorController };