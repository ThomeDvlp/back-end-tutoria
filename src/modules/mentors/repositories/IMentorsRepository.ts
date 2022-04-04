import { ICreateMentorDTO } from "@modules/mentors/dtos/ICreateMentorDTO";
import { Mentor } from "../infra/typeorm/entities/Mentor";


interface IMentorsRepository {
  create(data: ICreateMentorDTO):Promise<void>;
  findByEmail(email: string): Promise<Mentor>;
  findById(id: string): Promise<Mentor>;
};

export { IMentorsRepository };