//import dbConnect from "@/lib/dbConnect"
//import Task from "@/models/Task"
import { connect, model, models, Schema } from "mongoose";
const connectionString = process.env.MONGODB_URI_TM


export default async function handler(req, res) {
    await connect(connectionString);
    // await connect(connectionString);
    console.log("req.method: ", req.method)
    console.log("req.query.id", req.query.id)

    const id = req.query.id
    if (req.method === 'GET') {
        // Get only one document
        const doc = await Task.findOne()
        res.status(200).json(doc)
    } else if (req.method === 'DELETE') {
        const deletedDoc = await Task.deleteOne({ _id: id })
        res.status(200).json(deletedDoc)
    } else if (req.method === 'PUT') {
        console.log('id',req.query.id)
        console.log(req.body)
        const updatedDoc = await Task.updateOne({_id: id}, req.body)
        res.status(200).json(updatedDoc)
    } else {
        res.setHeader('Allow', ['GET', 'DELETE'])
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
    }
});


const Task = models?.tasks || model('tasks', Tasks);



