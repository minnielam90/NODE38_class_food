import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Customers from  "./Customers.js";
import _Orders from  "./Orders.js";
import _product from  "./product.js";
import _restaurant from  "./restaurant.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const Customers = _Customers.init(sequelize, DataTypes);
  const Orders = _Orders.init(sequelize, DataTypes);
  const product = _product.init(sequelize, DataTypes);
  const restaurant = _restaurant.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  Orders.belongsTo(Customers, { as: "Customer", foreignKey: "CustomerID"});
  Customers.hasMany(Orders, { as: "Orders", foreignKey: "CustomerID"});

  return {
    Customers,
    Orders,
    product,
    restaurant,
    users,
  };
}
