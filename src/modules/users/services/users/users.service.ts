import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private entity: Repository<UserEntity>,
  ) {}

  all() {
    return this.entity.find();
  }

  one(id: UserEntity['id']) {
    return this.entity.findOneBy({ id });
  }

  save(user: UserEntity) {
    return this.entity.save(user);
  }

  update(id: UserEntity['id'], user: UserEntity) {
    return this.entity.update(id, user);
  }

  delete(id: UserEntity['id']) {
    return this.entity.delete({ id });
  }
}
