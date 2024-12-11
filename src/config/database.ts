import { Sequelize } from "sequelize";
import envconfig from "./envconfig";  // Import default configuration

const sequelize = new Sequelize(envconfig.DB_NAME, envconfig.DB_USER, envconfig.DB_PASSWORD, {
    host: envconfig.DB_HOST,
    dialect: "mysql",
});

export default sequelize;
