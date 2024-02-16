import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.escuelajs.co/graphql",
  documents: ["./graphql/**/*.{ts,tsx}"],
  generates: {
    "./__generated__/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
