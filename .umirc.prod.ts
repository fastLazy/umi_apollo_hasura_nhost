import { defineConfig } from "@umijs/max";

export default defineConfig({
  define: {
    "process.env.UMI_ENV": "prod",
    "process.env.REGION": process.env.REGION,
    "process.env.SUBDOMAIN": process.env.SUBDOMAIN,
  },
});
