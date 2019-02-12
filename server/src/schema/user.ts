import { gql } from 'apollo-server-express'

export default gql`
  type User {
    id: ID
    email: String
    password: String
  }

  type Query {
    users: [User!]
    user(id: ID!): User
  }

  type Mutation {
    signUp(email: String!, password: String!): User!
    signIn(email: String!, password: String!): User!
    logOut: User
    deleteUser(id: ID!): User
    addUser(email: String!, password: String!): User!
  }
`