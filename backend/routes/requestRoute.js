const express = require('express')
const router = express.Router()

const {
    getAllRequests,
    getRequestByID,
    createRequest,
    deleteRequest,
    updateRequest
} = require('../controllers/requestController')

router.route('/').get(getAllRequests).post(createRequest)
router.route('/:id').get(getRequestByID).delete(deleteRequest).patch(updateRequest)

// export router
module.exports = router