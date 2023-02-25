import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'rodo-db.sqlite'
});

const Question = sequelize.define('Question', {
  content: DataTypes.STRING
});

export default Question;