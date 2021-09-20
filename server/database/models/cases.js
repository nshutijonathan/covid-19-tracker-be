'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cases.init({
    name: DataTypes.STRING,
    region: DataTypes.STRING,
    country: DataTypes.STRING,
    date: DataTypes.DATE,
    Value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cases',
  });
  return cases;
};