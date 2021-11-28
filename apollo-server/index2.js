// see https://www.apollographql.com/docs/apollo-server/getting-started/

import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type ProgrammingLanguage {
    name: String
  }

  type Query {
    books: [Book]
    programmingLanguages: [ProgrammingLanguage]
  }
`

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster'
  }
]

function getProgrammingLanguage() {
  return [
    {
      name: 'JavaScript'
    },
    {
      name: 'TypeScript'
    }
  ]
}

const resolvers = {
  Query: {
    books: () => books,
    programmingLanguages: getProgrammingLanguage
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
