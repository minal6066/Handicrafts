const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        id : {type : Schema.ObjectId},
        can_detail : {type: Object},
        email : {
            type : String,
            required : [true, 'email is a required field'],
            unique : true,
        },
        phone_no : {
            type: Number,
            required : [true, 'phone no is a required field'],
            unique : true,
        },
        password : {
            type : String,
            required : [true, 'password is a required field'],
            minLength : 6,
            select : false,
        },
        user_type : {type : Number}, //1->Admin, 2->User
        passwordChangedAt : Date,
        passwordResetToken : String,
        passwordResetExpires : Date,
    },
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
      }
);

module.exports = mongoose.model('user', userSchema, 'user');