import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'rodo-db.sqlite'
});

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  loginCode: DataTypes.STRING
});

export default User;