import { getCustomRepository, EntityRepository, Repository, getConnection } from "typeorm"
import { User } from '../entity/User'
import { finished } from "stream";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  async findById(id: number) {
    const user = await this.findOne({ id })
    console.log('found by id user: ', user)
    return user
  }
}

export default UserRepository