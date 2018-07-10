
import express from 'express'
import bodyParser from 'body-parser'
import { createServer } from 'http'
import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import {
  models,
  typeDefs,
  resolvers,
  schemaDirectives
} from './utils/parseModules'

import mongoose from 'mongoose'

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())


// initialize database connection
const DB_URL = process.env.DB_URL || (`mongodb://localhost/${process.env.DB_NAME || 'graphql-server'}`)

/* mongoose.connect(DB_URL).then(
  () => { console.log('Connected to mongodb') },
  err => { console.log(`Mongodb connection error: \n${err}`) }
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives
})
app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({ schema, context: {models, req }})))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))


const server = createServer(app)

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
    new SubscriptionServer({
      execute,
      subscribe,
      schema
    }, {
      server,
      path: '/subscriptions'
    })
})
*/