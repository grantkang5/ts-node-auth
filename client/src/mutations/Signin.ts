import { gql } from 'apollo-boost'

export default gql`
  mutation Signin($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
    }
  }
`