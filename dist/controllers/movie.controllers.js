"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetMovies = exports.httpCreateMovie = void 0;
const Movie_1 = __importDefault(require("../models/Movie"));
const httpCreateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = new Movie_1.default({
        title: req.body.title,
        director: req.body.director,
        summary: req.body.summary,
    });
    yield movie.save();
    res.status(201).json({ message: 'Movie created', data: movie });
});
exports.httpCreateMovie = httpCreateMovie;
const httpGetMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield Movie_1.default.find({});
    res.status(200).json({ message: 'success', data: movie });
});
exports.httpGetMovies = httpGetMovies;
