const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/v1/search/shop", {
      target: "https://openapi.naver.com",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/oauth2.0/authorize", {
      target: "https://nid.naver.com",
      changeOrigin: true,
    })
  );
};
