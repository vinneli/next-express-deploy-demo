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
