//import dbConnect from "@/lib/dbConnect"
//import Task from "@/models/Task"

import { connect, model, models, Schema } from "mongoose";
const connectionString = process.env.MONGODB_URI_TM

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)

    if (req.method === 'GET') {
        const { projectID } = req.query;
        const docs = await Task.find()
        res.status(200).json(docs)
    } else if (req.method === 'POST') {
        // console.log(typeof(req.body))
        const { projectID, taskname, description, prioritylvl, completestatus } = req.body;
        console.log("POST",req.body)
        const doc = await Task.create({projectID: projectID, taskname, description, prioritylvl, completestatus})
        res.status(201).json(doc)
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

const Tasks = new Schema({
    taskname: String,
    description: String,
    prioritylvl: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    },
    completestatus: {
        type: String,
        enum: ['Yes', 'No']
    },
    projectID: {
        type: Schema.Types.ObjectId,
        ref: 'projects'
    },
});


const Task = models?.tasks || model('tasks', Tasks);