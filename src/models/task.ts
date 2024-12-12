// task.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface TaskAttributes {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
}

interface TaskCreationAttributes extends Optional<TaskAttributes, "id"> { }

class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
    public id!: number;
    public title!: string;
    public description?: string;
    public completed!: boolean;

    // Optional timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: "Task",
        timestamps: true, // Enables createdAt and updatedAt
    }
);

export default Task;