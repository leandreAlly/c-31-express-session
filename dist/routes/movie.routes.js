"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRoutes = void 0;
const express_1 = __importDefault(require("express"));
const movie_controllers_1 = require("../controllers/movie.controllers");
const movieMiddleware_1 = __importDefault(require("../middlewares/movieMiddleware"));
const movieRoutes = express_1.default.Router();
exports.movieRoutes = movieRoutes;
movieRoutes.post('/', movieMiddleware_1.default, movie_controllers_1.httpCreateMovie);
movieRoutes.get('/', movie_controllers_1.httpGetMovies);
