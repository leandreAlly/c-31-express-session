"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const MovieSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    director: joi_1.default.string().required(),
    summary: joi_1.default.string(),
});
const validateMovie = (movieData) => {
    return MovieSchema.validate(movieData);
};
exports.default = validateMovie;
