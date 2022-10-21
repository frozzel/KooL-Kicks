// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
  product_name:{type: DataTypes.STRING, allowNull: false},
  price:{type: DataTypes.DECIMAL, allowNull: false, validate:{isNumeric: true,}},
  stock:{type: DataTypes.INTEGER, allowNull: false, defautValue: 10, validate:{isNumeric: true,}},
  catagory_id:{type: DataTypes.INTEGER, refrences:{model: 'category', key: 'id'}}
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
