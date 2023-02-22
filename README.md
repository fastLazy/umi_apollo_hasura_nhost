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
