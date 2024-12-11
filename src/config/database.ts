import { Sequelize } from "sequelize";

const sequelize = new Sequelize("task_management", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default sequelize;
