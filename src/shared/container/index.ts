import { container } from "tsyringe";

import { MentorsRepository } from "@modules/mentors/infra/typeorm/repositories/MentorsRepository"
import { IMentorsRepository } from "@modules/mentors/repositories/IMentorsRepository";

container.registerSingleton<IMentorsRepository>(
  "MentorsRepository",
  MentorsRepository
)