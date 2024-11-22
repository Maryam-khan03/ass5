const express = require('express')
const router = express.Router()
const controller = require('../controller/book')
router.post('/book',controller.addBook)
router.get('/book/:id',controller.getSingleBook)
router.put('/book/update/:id',controller.updateBook)
router.delete('/book/delete/:id',controller.deleteBook)
module.exports = router