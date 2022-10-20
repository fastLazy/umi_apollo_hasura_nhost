import { defineConfig } from "@umijs/max";

export default defineConfig({
  define: {
    "process.env.UMI_ENV": "prod",
    "process.env.uri": "http://hasura.ynbjx.cn:8765/v1/graphql",
    "process.env.xHasuraAdminSecret": "Bk#5Y$uT^vsxac4dK@W@8bqd",
  },
});
