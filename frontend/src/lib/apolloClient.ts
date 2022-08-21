import { ApolloClient, InMemoryCache } from "@apollo/client"

export const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:1337"

export const apolloClient = new ApolloClient({
  uri: API_ENDPOINT + "/graphql",
  cache: new InMemoryCache(),
})
