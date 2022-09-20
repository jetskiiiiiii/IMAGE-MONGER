const express = require(express)


const getRequest = async (req, res) => {
    const {name, request} = rea.body

    try {
        const request = await Request.create({name, request})
        res.status(200).json(request)
    } catch (error) {
        res.status(400).json({error})
    }
}