const proxy = [
    {
        context: '/api',
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '/login' }
    }
];
module.exports = proxy;