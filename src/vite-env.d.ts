interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string;
  readonly VITE_AUTH_URL: string;
  readonly VITE_GRAPHQL_SERVER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
