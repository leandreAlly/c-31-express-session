"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const MovieSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const Movie = mongoose_1.default.model('Movie', MovieSchema);
exports.default = Movie;
