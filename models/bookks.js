const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const BooksSchema = new Schema(
{
    titlte : String,
    author : String,
    genre : String,
    pages : Number,
    publication_year : Number
}) 
const Books = mongoose.model('Book', BooksSchema)
module.exports = Books
