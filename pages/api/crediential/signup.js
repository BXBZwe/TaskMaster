import { connect, model, models, Schema } from "mongoose";
const connectionString = process.env.MONGODB_URI_TM

export default async function handler(req,res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)
    try {
        const user = await User.create(req.body);
        res.redirect('/taskmaster')
        if(!user) {
            return res.json({code: 'User not created'})
        }
    } catch (error) {
        res.status(400).json({status: 'Not able to create a new user'})
    }
}

const Users = new Schema({
    name: {
        type: String,
        require:true,
        unique:true
    },
    email: {
        type:String,
        require:true,
        unique:true
    },
    password: {
        type:String,
        require: true

    }
});


const User = models?.users || model('users', Users);