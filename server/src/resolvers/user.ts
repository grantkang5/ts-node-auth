import { gql } from 'apollo-server-express'
import { find, filter } from 'lodash'
import { User } from '../entity/User'
import { getRepository, getConnection } from 'typeorm'

export default {
  Query: {
    users: async (parentValue, args, context, info) => {
      const users = await getRepository(User).find()
      console.log('Users', users)
      return users
    },
    user: async(parentValue, args, context) => {
      console.log(`Querying user with id ${args.id}`, context)
      const user = await getRepository(User).find({ where: { id: args.id } })
      console.log(user)
      return user[0]
    }
  },

  Mutation: {
    addUser: async (parentValue, { email, password }) => {
      const user = new User()
      user.email = email
      user.password = password

      const newUser = await getRepository(User).save(user)
      return newUser
    }
  }
}