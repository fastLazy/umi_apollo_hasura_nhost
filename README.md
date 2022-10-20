### 安装 pnpm 包管理工具

```shell
# 通过国内镜像源安装pnpm
npm install -g pnpm --registry=https://registry.npmmirror.com
```

### 设置 pnpm 为国内镜像源

```shell
pnpm config set registry https://registry.npmmirror.com --global

# 检查国内镜像源是否设置成功，如果成功将会显示url
pnpm config get registry
```

### 安装项目依赖

```shell
pnpm install
```

### 启动项目

```shell
pnpm start
```

### 相关学习资料

#### umijs

https://www.umijs.org

#### Graphql (学习 Gql 语法)

https://graphql.org/learn/

https://graphql.cn/learn/ (中文网)

#### Apollo Client

https://www.apollographql.com/docs/react/get-started

HASURA （开发文档）

https://hasura.io/docs/latest/queries/postgres/simple-object-queries/

### HASURA CRUD demo 演示

启动项目，然后访问路由：http://localhost:8000/demo

代码路径：/src/pages/demo/
