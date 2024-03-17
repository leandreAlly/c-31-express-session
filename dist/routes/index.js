"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movie_routes_1 = require("./movie.routes");
const apiRouter = (0, express_1.Router)();
apiRouter.use('/movie', movie_routes_1.movieRoutes);
exports.default = apiRouter;
