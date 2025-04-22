"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const fastify_commercetools_1 = __importDefault(require("./fastify-commercetools"));
exports.default = (0, fastify_plugin_1.default)((fastify, opts, next) => {
    if (!opts.http) {
        return next(new Error("Missing 'http' config attribute"));
    }
    if (!opts.projectKey) {
        return next(new Error("Missing 'projectKey' config attribute"));
    }
    return (0, fastify_commercetools_1.default)(fastify, opts, next);
}, {
    name: "fastify-commercetools",
});
