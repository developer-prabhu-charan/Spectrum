const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api/whatsapp',
        createProxyMiddleware({
            target: 'https://sociovia-backend-362038465411.europe-west1.run.app',
            changeOrigin: true,
            secure: true,
        })
    );
};
