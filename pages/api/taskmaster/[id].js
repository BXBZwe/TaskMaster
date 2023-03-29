//import dbConnect from "@/lib/dbConnect"
//import Project from "@/models/Project"
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
        const doc = await Project.findOne({ _id: id })
        res.status(200).json(doc)
    } else if (req.method === 'DELETE') {
        const deletedDoc = await Project.deleteOne({ _id: id })
        res.status(200).json(deletedDoc)
    } else if (req.method === 'PUT') {
        console.log('id',req.query.id)
        console.log(req.body)
        const updatedDoc = await Project.updateOne({_id: id}, req.body)
        res.status(200).json(updatedDoc)
    } else {
        res.setHeader('Allow', ['GET', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

const Projects = new Schema({
    name: String,
});


const Project = models?.projects || model('projects', Projects);



