import {Sequelize} from "sequelize";
import {dbConfig} from "../../config";

const sequelize = new Sequelize({
  database: dbConfig.database,
  host: dbConfig.host,
  password: dbConfig.password,
  username: dbConfig.username,
  logging: (sql: string) => console.log(sql),
  dialect: "mysql"
});

export default sequelize;
