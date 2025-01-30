// import model
const signupModel = require('../models/SignupModel')

// define handler
exports.createUser = async(req,res) => {
    try{
        const{name,email,password} = await req.body;
        const db_user= await signupModel.findOne({email})

        if(!name || !email || !password) {
            console.log('All fields are required')

            return res.status(400).json({
                success:false,
                message:'All field are required'
            })
        }
        else if(db_user){
            console.log('User already exists')

            return res.status(400).json({
                success:false,
                message:'User is already exist'
            })
        }
        else{
            let user = await signupModel.create({name:name,email:email,password:password})

            console.log('User created successfully')
            return res.status(200).json({
                success:true,
                message:'User created & store successfully'
            })
        }
    }
    catch(err){
        console.log(err);
        console.log('Problem in creating user in db');
        res.status(500).json({
            success:false,
            message:'Problem to create user'
        })
    }
}