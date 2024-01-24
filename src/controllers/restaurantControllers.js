import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getListRestaurant = async (req, res) => {
  try {
    let data = await conn.restaurant.findAll({
      include: ["like_res"],
    });
    res.send(data);
  } catch (error) {
    res.send(`BE error: ${error}`);
  }
};

export { getListRestaurant };
