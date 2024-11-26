const classCategoryModel = require('../models/classModel');
const instituteModel = require('../models/instituationModel');

module.exports.createClassCategory = async (req, res) => {
    try {
        if (!req.body.institute) throw new Error("Institute Not Found");
        const institute = await instituteModel.findById(req.body.institute);
        if (!institute) throw new Error("Institute Not Found");
        const classCategory = await classCategoryModel.create(req.body);
        res.status(201).send({ status: 201, success: true, message: "Class Category created Successfully", classCategory })
    } catch (err) {
        res.status(400).send({ status: err.Statuscode, success: false, message: err.message })
    }
}

module.exports.getClassCategory = async (req, res) => {
    try {
        const { classCategoryId } = req.params
        const classCategory = await classCategoryModel.findById(classCategoryId);   
        if (!classCategory) throw new Error("Class Category Not Found");
        res.status(200).send({ status: 200, success: true, message: "Class Category Fetched Successfully", classCategory })
    } catch (err) {
        res.status(400).send({ status: err.Statuscode, success: false, message: err.message })
    }
}

module.exports.getAllClassCategory = async (req, res) => {
    try {
        const classCategory = await classCategoryModel.find();
        res.status(200).send({ status: 200, success: true, message: "Class Category Fetched Successfully", classCategory })
    } catch (err) {
        res.status(400).send({ status: err.Statuscode, success: false, message: err.message })
    }
}
module.exports.updateClassCategory = async (req, res) => {
    try {
        const { classCategoryId } = req.params
        const classCategory = await classCategoryModel.findById(classCategoryId);   
        if (!classCategory) throw new Error("Class Category Not Found");
        if(req.body.instituteId){
            const institute = await instituteModel.findById(req.body.instituteId);
            if (!institute) throw new Error("Institute Not Found");
        }
        const updateClassCategory = await classCategoryModel.findByIdAndUpdate(classCategoryId,req.body,{new:true})
        res.status(200).send({ status: 200, success: true, message: "Class Category Updated Successfully", updateClassCategory })
    } catch (err) {
        res.status(400).send({ status: err.Statuscode, success: false, message: err.message })
    }
}

module.exports.deleteClassCategory = async (req, res) => {
    try {
        const { classCategoryId } = req.params
        const classCategory = await classCategoryModel.findById(classCategoryId);   
        if (!classCategory) throw new Error("Class Category Not Found");
        const deleteClassCategory = await classCategoryModel.findByIdAndDelete(classCategoryId);
        res.status(204).send({ status: 204, success: true, message: "Class Category Deleted Successfully", deleteClassCategory })
    } catch (err) {
        res.status(400).send({ status: err.Statuscode, success: false, message: err.message })
    }
}