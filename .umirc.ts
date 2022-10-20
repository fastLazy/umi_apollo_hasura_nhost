import { defineConfig } from "@umijs/max";
import zhCN from "antd/lib/locale/zh_CN";

export default defineConfig({
  hash: true,
  title: "demo",
  fastRefresh: true,
  routes: [
    {
      path: "/",
      routes: require("./src/routes/webRoutes").default,
    },
    {
      path: "/main",
      component: "@/layouts/AuthLayout",
      routes: require("./src/routes/authRoute").default,
    },
  ],
  antd: {
    // configProvider
    configProvider: {
      locale: zhCN,
    },
    style: "less",
  },
});
