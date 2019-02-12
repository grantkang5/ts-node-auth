import { gql } from 'apollo-server-express'
import { IResolvers } from 'graphql-tools'
import { find, filter } from 'lodash'
import { User } from '../entity/User'
import { getCustomRepository, getRepository, createQueryBuilder } from 'typeorm'
import UserRepository from '../repositories/UserRepository'
import * as bcrypt from 'bcryptjs'

export const resolvers: IResolvers = {
  Query: {
    users: async (_, args) => {
      const users = await getRepository(User).find()
      return users
    },
    user: async (_, { id }: { id: number }) => {
      return await getCustomRepository(UserRepository).findById(id)
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
