import { GraphQLClient } from "graphql-request";

const getBaseUrl = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("EXPO_PUBLIC_API_URL is not defined");
  }

  return apiUrl;
};

export const graphQLClient = new GraphQLClient(getBaseUrl());

export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  headers?: RequestInit["headers"],
) => {
  return async () => {
    try {
      const res = await graphQLClient.request<TData>(
        query,
        variables as any,
        headers as any,
      );
      return res;
    } catch (err) {
      console.error("❌ ERRO NO REQUEST:", err);
      throw err;
    }
  };
};
