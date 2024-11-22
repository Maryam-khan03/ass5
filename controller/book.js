const Book = require('../models/.book');
const addBook = async(req, res)=>
{
    const data = req.body;
    const object = await Book.create(data);
    res.json({"message":"Object created successfully", object})
}
const getSingleBook = async(req,res)=>
{
    const id = req.params.id;
    const object = await Book.findByID({_id:id});
    res.json({"message":"Object found successfully", object})
}
const updateBook = async(req,res)=>
{
    const id = req.params.id;
    const object = req.body;
    const updateBook = await Book.findByIDAndUpdate(id,object,{new: true});
    if(updateBook === null)
    {
        return res.status(404).send("Book not found");
    }
    res.status(200).send("Book updated");
}
const deleteBook = async(req,res)=>
{
    const id = req.params.id;
    const deleteBook = await Book.findByIDAndDelete(id);
    if(deleteBook === null)
        {
            return console.log("deleted")
        }
        res.json({"message":"Book deleted", deletebook});
        
}
module.exports = 
{
    addBook,
    getSingleBook,
    updateBook,
    deleteBook
}
