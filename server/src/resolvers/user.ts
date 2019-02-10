import { gql } from 'apollo-server-express'
import { find, filter } from 'lodash'
import { User } from '../entity/User'
import { getCustomRepository, getRepository } from 'typeorm'
import UserRepository from '../repositories/UserRepository'

export default {
  Query: {
    users: async (parentValue, args) => {
      const users = await getRepository(User).find()
      return users
    },
    user: async (parentValue, args) => {
      console.log(`Querying user with id ${args.id}`)
      return await getCustomRepository(UserRepository).findById(args.id)
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