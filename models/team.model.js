import { Sequelize, Model, DataTypes } from 'sequelize';
import User from './user.model.js';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'rodo-db.sqlite'
});

const Team = sequelize.define('Team', {
  name: DataTypes.STRING
});

Team.hasMany(User)


export default Team;