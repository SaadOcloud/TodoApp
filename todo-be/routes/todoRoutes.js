const express = require('express')
const router = express.Router()

const { 
    getItems,
    createItem,
    completeItems,
    updateItem,
    deleteItem,
} = require('../controllers/todoController')

const { validationHandler } = require('../middleware/validateMiddleware')


router.route('/').get(getItems).post(createItem)
router.route('/completeItems').get(completeItems)

router
    .route('/:id')
    .put(updateItem)
    .delete(deleteItem)

module.exports = router