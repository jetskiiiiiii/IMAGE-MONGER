const express = require('express')
const router = express.Router()

const {
    getRequest
} = require('../controllers/requestController')

router.post('/', getRequest)


module.exports = router