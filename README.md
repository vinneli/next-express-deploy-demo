### 准备
1. 本机和服务器都要生成 ssh key：`ssh-keygen -t rsa -C xxx@qq.com`
2. ssh key 打通本地和服务器，要不会频繁输密码：`ssh-copy-id root1@192.168.126.25`，或者把公钥拷贝服务器的 `~/.ssh/authorized_keys`
3. 本地和服务器上有 node 环境和安装好 pm2

### pm2 配置
通过 `pm2 ecosystem` 生成 pm2 配置文件 `ecosystem.config.js`：
```js
module.exports = {
  apps : [{
    name: 'next-express-demo',
    script: './bin/server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    log_date_format: "YYYY-MM-DD HH:mm Z",
    env: {
      NODE_ENV: 'development'
    },
    env_dev: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    dev : {
      user : 'root1',
      host : '192.168.126.25',
      ref  : 'origin/master',
      repo : 'git@github.com:vanni-li/next-express-deploy-demo.git',
      path : '/usr/local/sandai/next-express-demo',
      'post-deploy' : 'npm install && npm run pm2:start',
      env: {
        NODE_ENV: 'dev'
      }
    }
  }
};
```

初次执行之前要初始化：`pm2 deploy ecosystem.config.js production setup`
