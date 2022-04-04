import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { ICreateMentorDTO } from "@modules/mentors/dtos/ICreateMentorDTO";
import { IMentorsRepository } from "@modules/mentors/repositories/IMentorsRepository";
import { AppError } from "@shared/errors/AppError";


@injectable()
class CreateMentorUseCase {
  constructor(
    @inject('MentorsRepository')
    private mentorsRepository: IMentorsRepository
  ){};
  async execute({
    name, 
    email, 
    password,
  }:ICreateMentorDTO): Promise<void> {
    const  mentorAlreadyExists = await this.mentorsRepository.findByEmail(email);
    if ( mentorAlreadyExists) {
      throw new AppError('Mentor already exists!')
    }
    const passwordHash = await hash(password, 8);

    await this.mentorsRepository.create({
      name, email, password: passwordHash
    })
  }
}

export { CreateMentorUseCase } 