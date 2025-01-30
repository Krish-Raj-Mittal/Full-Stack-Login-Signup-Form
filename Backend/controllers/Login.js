const signupModel = require('../models/SignupModel') 

exports.loginUser = async(req,res) => {
    try{
        const {email,password} = await req.body;

        if(!email || !password) {
            console.log('All fields are required')
            return res.status(400).json({
                success:false,
                message:'All fields are required'
            })
        }

        const db_User = await signupModel.findOne({email});

        if(!db_User) {
            console.log('User is not registered')
            return res.status(404).json({
                success:false,
                message:'User is not registered'
            })
        }
        else if(password === db_User.password) {
            console.log('User logged in Successfully')
            return res.status(200).json({
                success:true,
                message:'User logged in Successfully'
            })
        }
        else{
            console.log('Password is invalid')
            return res.status(400).json({
                success:false,
                message:'Password is invalid'
            })
        }
     }
    catch(err){
        console.error(err)
        console.log('Error to Login User')
        return res.status(500).json({
            success:false,
            message:'Problem to Login User'
        })
    }
}