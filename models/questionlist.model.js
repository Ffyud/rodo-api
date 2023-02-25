import { Sequelize, Model, DataTypes } from 'sequelize';
import Question from './question.model.js';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'rodo-db.sqlite'
});

const QuestionList = sequelize.define('QuestionList', {
  name: DataTypes.STRING
  // availableStartDate: DataTypes.DATETIME,
  // availableEndDate: DateType.DATETIME
});

QuestionList.hasMany(Question)

export default QuestionList;