// Aqui faz o Require das bibliotecas que estão sendo usadas
const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

// Aqui faz o require dos Controllers usados
const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.post("/spots/:spot_id/booking", BookingController.store);

routes.get("/dashboard", DashboardController.show);

module.exports = routes;
