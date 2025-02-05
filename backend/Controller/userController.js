import User from "../model/userModel.js";

export const signUp = async (req,res)=>{
    try {
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email});
        if (user) {
            res.status(400).json({message: "User already exist..."});
        }

        const createdUser = new User({
            fullname,
            email,
            password
        })

        await createdUser.save();

        res.status(201).json({message:'User created successfully...'})

    } catch (error) {
        console.log("Error: ",error.message);
        res.status(500).json({message:'Intervals server error...'})
    }
}
