import { InMemoryCache } from 'apollo-boost'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'

const cache = (new InMemoryCache()).restore({})

const client = new ApolloClient({
  link: new HttpLink({ uri: '/api/graphql' }),
  cache
})

export default client