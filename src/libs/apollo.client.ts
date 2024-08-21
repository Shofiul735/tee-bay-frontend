"use client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.NEXT_PUBLIC_Graphql_Source);

export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_Graphql_Source,
    cache: new InMemoryCache(),
});
