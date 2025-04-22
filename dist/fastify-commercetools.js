"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_client_v2_1 = require("@commercetools/sdk-client-v2");
const platform_sdk_1 = require("@commercetools/platform-sdk");
exports.default = (fastify, opts, next) => {
    const { auth, http, middleware, queue, projectKey } = opts;
    const httpMiddlewareOptions = Object.assign(Object.assign({}, http), { fetch: http.fetch || fetch });
    const clientBuilder = new sdk_client_v2_1.ClientBuilder()
        .withProjectKey(projectKey)
        .withHttpMiddleware(httpMiddlewareOptions)
        .withLoggerMiddleware();
    if (auth) {
        const authMiddlewareOptions = Object.assign(Object.assign({}, auth), { fetch: auth.fetch || fetch });
        clientBuilder.withClientCredentialsFlow(authMiddlewareOptions);
    }
    if (middleware) {
        clientBuilder.withMiddleware(middleware);
    }
    if (queue) {
        clientBuilder.withQueueMiddleware(queue);
    }
    const ctpClient = clientBuilder.build();
    const apiRoot = (0, platform_sdk_1.createApiBuilderFromCtpClient)(ctpClient);
    const requestBuilder = apiRoot.withProjectKey({
        projectKey,
    });
    fastify.decorate("commercetools", { requestBuilder });
    next();
};
