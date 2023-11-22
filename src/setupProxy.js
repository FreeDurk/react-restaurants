const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://nextjs-orpin-omega-98.vercel.app",
      changeOrigin: true,
    })
  );
};
