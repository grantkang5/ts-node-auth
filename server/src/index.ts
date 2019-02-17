import 'reflect-metadata'
import typeDefs from './schema'
import resolvers from './resolvers/user'

// Express App Setup
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')
const { createConnection } = require('typeorm')
const { ApolloServer, gql } = require('apollo-server-express')
const passport = require('passport')
const RedisStore = require('connect-redis')(session)

const startServer = async () => {
  const connection = await createConnection()
    .then(async connection => {
      const app = express()
      app.use(cors())
      app.use(bodyParser.json())
      app.use(helmet())
      app.use(
        session({
          resave: true,
          saveUninitialized: true,
          secret: 'kalandra',
          store: new RedisStore({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            autoReconnect: true
          })
        })
      )

      app.use(passport.initialize())
      app.use(passport.session())

      // GraphQL Setup
      const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        playground: {
          settings: {
            'request.credentials': 'include' // this setting is required to pass req.user from playground
          }
        },
        context: ({ req, res }: any) => ({ req, res })
      })
      apolloServer.applyMiddleware({ app })

      // Express routes
      app.get('/', (req, res) => {
        res.send('Hello World 3')
      })

      app.get('/secret', (req, res) => {
        res.send('secret')
      })

      app.listen(5000, err => {
        console.log(
          `Listening on port 5000`
        )
      })
    })
    .catch(error => console.log(error))
}

startServer()
