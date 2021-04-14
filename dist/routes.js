"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = require("./config/multer");
const multer_2 = __importDefault(require("multer"));
const routes = express_1.Router();
routes.post('/upload', multer_2.default(multer_1.multerConfig).single('file'), (request, response) => {
    return response.json(request.file);
});
exports.default = routes;
