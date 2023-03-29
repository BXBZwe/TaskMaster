import { connect, model, models, Schema } from "mongoose";
const connectionString = process.env.MONGODB_URI_TM

export default async function handler(req,res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)
    const id = req.query.id
    const {email, password} = req.body
    const user = await User.findOne({email, password})
    if(!user) {
        return res.json({status:'Not able to find the user'})
    }
    else {
        res.redirect('/taskmaster')
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