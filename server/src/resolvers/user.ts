import { IResolvers } from 'graphql-tools';
import { getCustomRepository, getRepository } from 'typeorm';
import { User } from '../entity/User';
import UserRepository from '../repositories/UserRepository';

export const resolvers: IResolvers = {
  Query: {
    users: async (_, args) => {
      const users = await getRepository(User).find()
      return users
    },
    user: async (_, { id }: { id: number }) => {
      return await getCustomRepository(UserRepository).findById(id)
    },
    me: async (_, args, { req }) => {
      return req.user
    }
  },

  Mutation: {
    signUp: async (
      _,
      { email, password }: { email: string; password: string },
      { req }: any
    ) => {
      return await getCustomRepository(UserRepository).signUp({
        email,
        password,
        req
      })
    },
    signIn: async (
      _,
      { email, password }: { email: string; password: string },
      { req }: any
    ) => {
      return await getCustomRepository(UserRepository).signIn({
        email,
        password,
        req
      })
    },
    logOut: async (parentValue, args, { req }) => {
      const { user } = req // save user before logging out
      req.logout()
      return user
    }
  }
}

export default resolvers
