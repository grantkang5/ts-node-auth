import "reflect-metadata";
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

const startServer = async () => {
  const connection = await createConnection()
    .then(async connection => {
      const app = express()
      app.use(cors())
      app.use(bodyParser.json())
      app.use(helmet())
      app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: 'qid',
        // cookie: { secure: true } /* enable for https prod */
      }))

      // GraphQL Setup
      const apolloServer = new ApolloServer({ typeDefs, resolvers })
      apolloServer.applyMiddleware({ app })

      // Express routes
      app.get('/', (req, res) => {
        res.send('Hello World 3')
      })

      app.listen(5000, err => {
        console.log(`Listening on port 5000 ${process.env.NODE_ENV}`, process.env.PG_PORT)
      })
    })
    .catch(error => console.log(error))
}

startServer()
