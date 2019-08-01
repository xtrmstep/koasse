"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var home_1 = __importDefault(require("./middleware/home"));
var messages_1 = __importDefault(require("./middleware/messages"));
var app = express_1.default();
// middleware
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(morgan_1.default('combined'));
// routing
app.use('/', home_1.default);
app.use('/messages', messages_1.default);
exports.default = app;
