const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const handicraftsSchema = new Schema(
    {
        id : {type : Schema.ObjectId},
        productCode : {
            type : Number,
            required : [true,'Product Code is a required field']
        },
        productName : {type : String, required : true},
        productType : {type : String, enum: ['Metal', 'Wooden', 'Marble', 'Painting']},
        price: {type : Number},
        material : {type: String},
        size : {type : String},
        weight : {type : String},
        description : {type : String},
        images : [String],
        quantity : {type : Number, required : true},
        isDeleted : {type:Boolean, default: false},
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
)
module.exports = mongoose.model('handicrafts', handicraftsSchema, 'handicrafts');
