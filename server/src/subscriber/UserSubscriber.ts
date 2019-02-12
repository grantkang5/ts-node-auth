import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  getRepository,
} from 'typeorm'

import { User } from '../entity/User'
import * as bcrypt from 'bcryptjs'

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User
  }
}
