require('dotenv').config()

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


// initialize database connection
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME || 'graphql-server'}`)

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives
})

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
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