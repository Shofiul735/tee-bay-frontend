import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.Graphql_Source);

export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});
