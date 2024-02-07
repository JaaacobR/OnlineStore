import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.escuelajs.co/graphql",
  cache: new InMemoryCache(),
});
