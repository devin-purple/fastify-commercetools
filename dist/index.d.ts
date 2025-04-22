/// <reference types="node" />
import { ByProjectKeyRequestBuilder } from "@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder";
import { FastifyCommercetoolsOptions } from "./fastify-commercetools-options";
export { FastifyCommercetoolsOptions };
declare module "fastify" {
    interface FastifyInstance {
        commercetools: {
            requestBuilder: ByProjectKeyRequestBuilder;
        };
    }
}
declare const _default: import("fastify").FastifyPluginCallback<FastifyCommercetoolsOptions, import("http").Server>;
export default _default;
//# sourceMappingURL=index.d.ts.map