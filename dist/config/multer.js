"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const crypto_1 = require("crypto");
const multer_1 = require("multer");
const path_1 = require("path");
exports.multerConfig = {
    dest: path_1.resolve(__dirname, '..', '..', 'uploads'),
    storage: multer_1.diskStorage({
        destination: (request, file, callback) => {
            callback(null, path_1.resolve(__dirname, '..', '..', 'uploads'));
        },
        filename: (request, file, callback) => {
            crypto_1.randomBytes(16, (error, hash) => {
                if (error) {
                    callback(error, file.filename);
                }
                const filename = `${file.originalname}`;
                callback(null, filename);
            });
        },
    }),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5 mb
    },
    fileFilter: (request, file, callback) => {
        const formats = ['image/jpeg', 'image/jpg', 'image/png'];
        if (formats.includes(file.mimetype)) {
            callback(null, true);
        }
        else {
            callback(new Error('Format not accepted'));
        }
    },
};
