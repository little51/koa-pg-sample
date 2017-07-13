# koa-pg-sample
================
## 安装
### 1.Node版本在v8.0以上
### 2.安装依赖模块 
    在koa-pg-sample目录下，执行：
    npm install 
## 配置
   在db.js配置pg数据库连接参数
## 启动
   node  app.js
## 测试
  http://localhost:3000/overview
## 文件说明
koa-pg-sample<br />
│  app.js         //程序入口<br />
│  db.js          //数据库配置<br />
├─service         //业务逻辑<br />
│  routers.js     //路由<br /> 