import { defineConfig } from "@umijs/max";

export default defineConfig({
  define: {
    "process.env.UMI_ENV": "dev",
    "process.env.uri": "http://47.108.90.219:8080/v1/graphql",
    "process.env.xHasuraAdminSecret": "fastlazy1234",
  },
});
