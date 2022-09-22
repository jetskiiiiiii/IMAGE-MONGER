const mongoose = require('mongoose')
const Requests = require('../models/requestModel')

// get all requests
const getAllRequests = async (req, res) => {
    const request = await Requests.find().sort({createdAt: -1})

    res.status(200).json(request)
}

// get request by ID
const getRequestByID = async (req, res) => {
    const {id} = req.params
    
    const request = await Requests.findById(id)

    // run id by mongoose object ID validity
    // !! DOESN'T WORK YET !!
    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({message: "Request could not be found"})
    // }

    if(!request){
        return res.status(404).json({message: "Request could not be found"})
    }
    res.status(200).json(request)
}

// create request
const createRequest = async (req, res) => {
        const {name, request} = req.body
    
        try {
                const request = await Request.create({name, request})
                res.status(200).json(request)
            } catch (error) {
                    res.status(400).json({error: error.message})
                }
            }

// delete request
const deleteRequest = async (req, res) => {
    const{id} = req.params

    const request = await Request.findOneAndDelete({_id: id})
    
    if(!request){
        return res.status(404).json({message: "Request could not be found"})
    }
    res.status(200).json(request)
}

// update request
const updateRequest = async (req, res) => {
    const{id} = req.params

    const request = Request.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!request){
        return res.status(404).json({message: "Request could not be found"})
    }
    res.status(200).json(request)
}

module.exports = {
    getAllRequests,
    getRequestByID,
    createRequest,
    deleteRequest,
    updateRequest
}