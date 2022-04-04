import { Router } from 'express';

import { CreateMentorController } from '@modules/mentors/useCases/createMentor/CreateMentorController';

const mentorsRoutes = Router();

const createMentorController = new CreateMentorController();

mentorsRoutes.post('/', createMentorController.handle);

export { mentorsRoutes }