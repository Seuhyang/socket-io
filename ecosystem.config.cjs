// @ts-ignore
module.exports = {
    apps: [
        {
            name: 'dev-api-server',
            script: './dist/socket-io/api/index.js',
            watch: true,
            time: true,
            autorestart: true,
            instances: 1,
            log_date_format: 'YY.MM.DD HH:mm Z',
            ignore_watch: ['.git', '.DS_Store', 'node_modules'],
            env: {
                NODE_ENV: 'development',
            },
        },
    ],
};
