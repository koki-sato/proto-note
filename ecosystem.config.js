module.exports = {
  apps: [
    {
      name: 'proto-note',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: [process.env.HOST],
      ref: 'origin/master',
      repo: 'https://github.com/koki-sato/proto-note.git',
      path: '/var/www/proto-note',
      ssh_options: ['ForwardAgent=yes', 'StrictHostKeyChecking=no'],
      'post-deploy': 'docker-compose build && bin/yarn setup && docker-compose restart'
    }
  }
}
