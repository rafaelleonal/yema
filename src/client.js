import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

/* Metodo que inicia ApolloClient con el uri de la api de GraqphQl */

export const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
});