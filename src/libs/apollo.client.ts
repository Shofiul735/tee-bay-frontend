import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: process.env.Graphql_Source,
    cache: new InMemoryCache(),
});
