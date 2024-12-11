import express, { Request, Response } from "express";
import Task from "../models/task";

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Error fetching tasks" });
    }
};

export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description, completed } = req.body;
        console.log('req.body :>> ', req.body);
        const newTask = await Task.create({ title, description, completed });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Error creating task" });
    }
};

export const updateTask = async (req: Request, res: Response): Promise<express.Response<any, Record<string, any>> | any> => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const task = await Task.findByPk(id);

        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }

        await task.update({ title, description, completed });
        return res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: "Error updating task" });
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<express.Response<any, Record<string, any>> | any> => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);

        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }

        await task.destroy();
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: "Error deleting task" });
    }
};
