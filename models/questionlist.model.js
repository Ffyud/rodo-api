import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'rodo-db.sqlite'
});

const QuestionList = sequelize.define('QuestionList', {
  name: DataTypes.STRING,
  availableStartDate: DataTypes.DATETIME,
  availableEndDate: DateType.DATETIME
});

export default QuestionList;