const Handicraft = require('../models/handicrafts');

exports.addHandicraft = async (req, res, next) => {
    if(!req.params.type){
        return "Handicraft type is a required field";
    }
    if(!req.body.productName || !req.body.productCode){
        return "Product name and code are required fields";
    }
    if(!req.body.price){
        return "The handicraft must have a price";
    }
    const product = await Handicraft.findOne({productCode : req.body.productCode});
    if(product){
        return "Handicraft with this code already exists.";
    }else{
        req.body.productType = req.params.type;
        const handicraft = await Handicraft.create(req.body);
        res.status(200).json({
            status : 'success',
            isSuccess : true,
            message : 'Handicraft added successfully',
            data : handicraft,
        })
    }

};

exports.getHandicrafts = async(req, res, next) => {
    const productType = req.params.type;
    if(!productType){
        return "Please specify the type of handicrafts required";
    }
    const handicrafts = await Handicraft.find({productType, isDeleted : {$ne : true}});
    if(!handicrafts){
        return "No handicraft found matching this type";
    }
    res.status(200).json({
        status : 'success',
        isSuccess : true,
        total : handicrafts.length,
        message : "Handicrafts found",
        data : handicrafts,
    })
};

exports.getOneHandicraft = async(req, res, next) => {
    if(!req.params.handicraftId){
        return "Please provide the handicraft id";
    }
    const handicraft = await Handicraft.findOne({id : req.params.handicraft, isDeleted : { $ne : true}});
    if(!handicraft){
        return "Handicraft not found matching this ID";
    }
    res.status(200).json({
        status : 'success',
        isSuccess : true,
        message : 'Handicraft with ID found successfully',
        data : handicraft,
    });
};

exports.deleteHandicraft = async(req, res, next) => {
    if(!req.params.handicraftId){
        return "Please provide the handicraft id";
    }
    const handicraft = await Handicraft.findOne({id : req.params.handicraft, isDeleted: {$ne : true}});
    if(!handicraft){
        return "Handicraft not found matching this ID";
    }
    handicraft.isDeleted = true;
    await handicraft.save();
    res.status(200).json({
        status : 'success',
        isSuccess : true,
        message : "Handicraft deleted successfully",
        data : handicraft,
    });
};

exports.editHandicraft = async(req, res, next) => {
    if(!req.params.handicraftId){
        return console.log("Please provide handicraft id");
    }
    const handicraft = await Handicraft.findOne({id : req.params.handicraftId, isDeleted :{$ne : true}});
    if(!handicraft){
        return console.log("Handicraft with this id not found");
    }
    const handicraftUpdated = await Handicraft.findByIdAndUpdate(req.params.handicraftId, req.body, {
        new: true,
        runValidators : true,
    });
    res.status(200).json({
        status : 'success',
        isSuccess : true,
        message : 'Handicraft updated successfully',
        data : handicraftUpdated,
    })

}