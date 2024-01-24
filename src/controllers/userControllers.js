import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
// initModel => User, Customer, Order,......
const conn = initModels(sequelize);

const getUser = async (req, res) => {
  try {
    // SELECT * FROM users
    let data = await conn.users.findAll();
    res.send(data);
  } catch (error) {
    console.log(`Back end error: ${error}`);
  }
};

export { getUser };
