import { Router } from 'express';

import { mentorsRoutes } from './mentors.routes';

const router = Router();

router.use('/mentors', mentorsRoutes);

export { router }