import { getRepository, Repository } from "typeorm";

import { ICreateMentorDTO } from "@modules/mentors/dtos/ICreateMentorDTO";
import { Mentor } from "@modules/mentors/infra/typeorm/entities/Mentor";
import { IMentorsRepository } from "@modules/mentors/repositories/IMentorsRepository";


class MentorsRepository implements IMentorsRepository {
  private repository: Repository<Mentor>;
    constructor(){
      this.repository = getRepository(Mentor);
    }

  async create({
    name, 
    email,
    password,
    avatar,
    id,
  }:ICreateMentorDTO): Promise<void>{
    const Mentor = this.repository.create({
      name,
      password,
      email,
      avatar,
      id
    });

    await this.repository.save(Mentor)
  }

  async findByEmail(email: string): Promise<Mentor> {
    const Mentor = await this.repository.findOne({ email });
    return Mentor;
  }
  
  async findById(id: string): Promise<Mentor> {
    const Mentor = await this.repository.findOne(id);
    return Mentor;
  }

};

export { MentorsRepository };