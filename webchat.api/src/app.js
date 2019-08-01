"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_mount_1 = __importDefault(require("koa-mount"));
var koa_logger_1 = __importDefault(require("koa-logger"));
var cors_1 = __importDefault(require("@koa/cors"));
var koa_body_1 = __importDefault(require("koa-body"));
var koa_event_stream_1 = __importDefault(require("koa-event-stream"));
var home_1 = __importDefault(require("./middleware/home"));
var messages_1 = __importDefault(require("./middleware/messages"));
var app = new koa_1.default();
app.use(koa_logger_1.default());
app.use(cors_1.default());
app.use(koa_body_1.default({
    jsonLimit: '1kb'
}));
app.use(koa_event_stream_1.default());
app.use(koa_mount_1.default('/', home_1.default()));
app.use(koa_mount_1.default('/messages', messages_1.default()));
exports.default = app;
