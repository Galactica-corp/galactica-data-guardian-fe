import { GraphQLError } from "graphql";
import { GraphQLClient, Variables, gql } from "graphql-request";

interface GraphQLClientResponse<Data> {
  status: number;
  headers: Headers;
  data: Data;
  extensions?: unknown;
  errors?: GraphQLError[];
}

const client = new GraphQLClient(`${import.meta.env.VITE_API_ENDPOINT}`);

export const graphqlRequestFetcher = <TData, TVariables extends Variables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit["headers"]
): (() => Promise<TData>) => {
  return async () => {
    const document = gql`
      ${query}
    `;

    const result: GraphQLClientResponse<TData> = await client.request(
      document,
      variables,
      options
    );

    if (result.errors) {
      const message = result.errors
        ? result.errors[0].message
        : "GraphQL fetching error";
      throw new Error(message);
    }

    return result.data as TData;
  };
};
