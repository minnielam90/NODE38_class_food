import express from "express";
import { getListRestaurant } from "../controllers/restaurantControllers.js";

const restaurantRoutes = express.Router();

restaurantRoutes.get("/get-restaurant", getListRestaurant);

export default restaurantRoutes;
