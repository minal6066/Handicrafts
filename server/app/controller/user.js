
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const signToken = ({ email, _id, user_type }) =>
  jwt.sign({ email, id: _id, user_type }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });


exports.create = async (req,res,next) => {
    if(!req.body.email || !req.body.phone_no){
        return "Phone number and email are required fields! : 401";
    }
    const userExist = await User.findOne({email : req.body.email});
    if(userExist){
        return "User with this email already exist : 208";
    }
    if(req.body.password !== req.body.confirm_password){
        return "Password and confirm password does not match : 401";
    }
    const {user_type, can_detail} = req.body;
    if(!user_type){
        return "User Type is a required field : 401";
    }
    if(user_type !==1 && user_type !==2){
        return "User type is unauthorized : 401";
    }
    if (user_type === 2){
        const user = await User.create(req.body);
        user.password = undefined;
        const token = signToken(user);
        console.log(token)
        return res.status(201).json({
            status : 'success',
            isSuccess : true,
            token,
            message : 'User created successfully',
            data : user,
        });
    }
    if (user_type === 1){
        const user = await User.create(req.body);
        const token = signToken(user);
        user.password = undefined;
        return res.status(201).json({
            status : 'success',
            isSuccess : true,
            token,
            messsgae : 'Admin created successfully',
            data : user,
        });
    }
}

exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password){
        return "Please enter both email and password!";
    }
    const user = await User.findOne({email, password});
    if(!user){
        return "Invalid email or password : 401";
    }
    const token = signToken(user);
    // console.log(token);
    user.password = undefined;
    res.status(200).json({
        status : 'success',
        token,
        isSuccess : true,
        data : user,
    });
};

exports.getMyProfile = async (req,res, next) => {
    const user = User.findById(req.body.id);
    res.status(200).json({
        status : 'success',
        isSuccess : true,
        data : user,
    })
}

exports.deleteAccount = async (req, res, next) => {
    await User.findByIdAndDelete(req.decodedData.id);
    res.status(304).json({
        status: 'success',
        isSuccess : true,
        message : 'Account deleted successfully',
    });
};