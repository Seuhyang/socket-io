// @ts-ignore
module.exports = {
    apps: [
        {
            name: 'official-site-api-server',
            script: './dist/api/index.js',
            watch: true,
            time: true,
            instances: 1,
            log_date_format: 'YY.MM.DD HH:mm Z',
            ignore_watch: ['.git', '.DS_Store', 'node_modules'],
            env: {
                name: 'dev-api-server',
                NODE_ENV: 'development',
            },
        },
    ],
};
