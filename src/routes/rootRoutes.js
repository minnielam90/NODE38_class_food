// tổng hợp tất cả các routes của các routes khác: videoRoutes, userRoutes,......

import express from "express";
import restaurantRoutes from "./restaurantRoutes.js";
import userRoutes from "./userRoutes.js";
import videoRoutes from "./videoRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/video", videoRoutes);
rootRoutes.use("/user", userRoutes);
rootRoutes.use("/restaurant", restaurantRoutes);

export default rootRoutes;
