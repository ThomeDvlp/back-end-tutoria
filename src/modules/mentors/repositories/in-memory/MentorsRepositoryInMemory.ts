import { Mentor } from '@modules/mentors/infra/typeorm/entities/Mentor';
import { ICreateMentorDTO } from '@modules/mentors/dtos/ICreateMentorDTO';
import { IMentorsRepository } from '@modules/mentors/repositories/IMentorsRepository';

class MentorsRepositoryInMemory implements IMentorsRepository {
  mentors: Mentor[] = [];

  async create({name, email, password}: ICreateMentorDTO): Promise<void> {
    const mentor = new Mentor();

    Object.assign(mentor, {
      name, email, password
    })

    this.mentors.push(mentor);
  }
  async findByEmail(email: string): Promise<Mentor> {
    const mentor = this.mentors.find(mentor => mentor.email === email);
    return mentor;
  }
  async findById(id: string): Promise<Mentor> {
    const mentor = this.mentors.find(mentor=>mentor.id === id);
    return mentor;
  }
}

export { MentorsRepositoryInMemory };