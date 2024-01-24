import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Customers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Customers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CustomerID" },
        ]
      },
    ]
  });
  }
}
