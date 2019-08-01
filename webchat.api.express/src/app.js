"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var home_1 = __importDefault(require("./middleware/home"));
var messages_1 = __importDefault(require("./middleware/messages"));
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use('/', home_1.default);
app.use('/messages', messages_1.default);
exports.default = app;
