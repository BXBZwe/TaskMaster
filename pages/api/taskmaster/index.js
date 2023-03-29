//import dbConnect from "@/lib/dbConnect"
//import Project from "@/models/Project"

import { connect, model, models, Schema } from "mongoose";
const connectionString = process.env.MONGODB_URI_TM

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)

    if (req.method === 'GET') {
        const docs = await Project.find()
        res.status(200).json(docs)
    } else if (req.method === 'POST') {
        // console.log(typeof(req.body))
        console.log("POST",req.body)
        const doc = await Project.create(req.body)
        res.status(201).json(doc)
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

const Projects = new Schema({
    name: String,
});


const Project = models?.projects || model('projects', Projects);