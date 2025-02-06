import User from "../model/userModel.js";
import bcryptjs from 'bcryptjs';

export const signUp = async (req,res)=>{
    try {
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email});
        if (user) {
            res.status(400).json({message: "User already exist..."});
        }

        const hashPassword = await bcryptjs.hash(password,10);

        const createdUser = new User({
            fullname,
            email,
            password: hashPassword
        })

        await createdUser.save();

        res.status(200).json({message:'User created successfully...'})

    } catch (error) {
        console.log("Error: ",error.message);
        res.status(500).json({message:'Intervals server error...'})
    }
}


export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password,user.password);

        if (!user || !isMatch) {
            res.status(400).json({message:"Invalid password & username"})
        }else{
            res.status(200).json({message:"Login successfull",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error: ",error.message)
        res.status(500).json({message:"Interval server error..."})
    }
}
