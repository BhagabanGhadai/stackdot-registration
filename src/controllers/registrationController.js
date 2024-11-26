const registrationModel = require('../models/registrationModel');
const instituationModel = require('../models/instituationModel');
const boardModel = require('../models/boardModel');
const standardModel = require('../models/standardModel');
const classCategoryModel = require('../models/classModel');
const subjectModel = require('../models/subjectModel');
const studyMediumModel = require('../models/studyMedium');


exports.createRegistration = async (req, res) => {
    try {
        const { name,institue,board,standard,subject,medium,classCategory} = req.body;
        if (!name || !institue || !board || !standard || !subject || !medium || !classCategory) throw new Error("All Fields Are Required")
        const [institueDetails, boardDetails, standardDetails, classCategoryDetails, subjectDetails, mediumDetails] = await Promise.all([
            instituationModel.findById(institue),
            boardModel.findById(board),
            standardModel.findById(standard),
            classCategoryModel.findById(classCategory),
            subjectModel.findById(subject),
            studyMediumModel.findById(medium),
        ]);
        if (!institueDetails || !boardDetails || !standardDetails || !classCategoryDetails || !subjectDetails || !mediumDetails) throw new Error("Invalid Details")
        
        const registration = await registrationModel.create(req.body);
        res.status(201).send({ status: 201, success: true, message: "Registration Created Successfully", registration });
    } catch (err) {
        res.status(400).send({ status: err.Statuscode, success: false, message: err.message })
    }   
}

exports.getAllRegistration = async (req, res) => {
    try {
        let filter={}
        if(req.query.institue) filter.institue=req.query.institue
        if(req.query.board) filter.board=req.query.board
        if(req.query.standard) filter.standard=req.query.standard
        if(req.query.subject) filter.subject=req.query.subject
        if(req.query.medium) filter.medium=req.query.medium
        if(req.query.classCategory) filter.classCategory=req.query.classCategory
        const registrations = await registrationModel.find(filter);
        res.status(200).send({ status: 200, success: true, message: "Registrations Fetched Successfully", registrations });
    } catch (err) {
        res.status(400).send({ status: err.Statuscode, success: false, message: err.message })
    }   
}

exports.getRegistration = async (req, res) => {
    try {
        const { registrationId } = req.params;
        const registration = await registrationModel.findById(registrationId);
        if (!registration) throw new Error("Registration Not Found");
        res.status(200).send({ status: 200, success: true, message: "Registration Fetched Successfully", registration });
    } catch (err) {
        res.status(400).send({ status: err.Statuscode, success: false, message: err.message })
    }   
}

exports.deleteRegistration = async (req, res) => {
    try {
        const { registrationId } = req.params;
        const registration = await registrationModel.findById(registrationId);
        if (!registration) throw new Error("Registration Not Found");
        const deleteRegistration = await registrationModel.findByIdAndDelete(registrationId);
        res.status(204).send({ status: 204, success: true, message: "Registration Deleted Successfully", deleteRegistration });
    } catch (err) {
        res.status(400).send({ status: err.Statuscode, success: false, message: err.message })
    }   
}

exports.updateRegistration = async (req, res) => {
    try {
        const { registrationId } = req.params;
        const registration = await registrationModel.findById(registrationId);
        if (!registration) throw new Error("Registration Not Found");
        if (req.body.institue) {
            const institueDetails = await instituationModel.findById(req.body.institue);
            if (!institueDetails) throw new Error("Institue Not Found");
        }
        if (req.body.board) {
            const boardDetails = await boardModel.findById(req.body.board);
            if (!boardDetails) throw new Error("Board Not Found");
        }
        if (req.body.standard) {
            const standardDetails = await standardModel.findById(req.body.standard);
            if(!standardDetails) throw new Error("Standard Not Found")
        }
        if (req.body.subject) {
            const subjectDetails = await subjectModel.findById(req.body.subject);
            if (!subjectDetails) throw new Error("Subject Not Found");
        }
        if (req.body.medium) {
            const mediumDetails = await studyMediumModel.findById(req.body.medium);
            if (!mediumDetails) throw new Error("Medium Not Found");
        }
        if (req.body.classCategory) {
            const classCategoryDetails = await classCategoryModel.findById(req.body.classCategory);
            if (!classCategoryDetails) throw new Error("ClassCategory Not Found");
        }
        const updateRegistration = await registrationModel.findByIdAndUpdate(registrationId, req.body, { new: true });
        res.status(200).send({ status: 200, success: true, message: "Registration Updated Successfully", updateRegistration });
    } catch (err) {
        res.status(400).send({ status: err.Statuscode, success: false, message: err.message })
    }   
}