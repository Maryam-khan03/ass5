const User = require('../models/.user');


const createUser = async (req, res) => 
{
  try{ 
    const data = req.body
    const user =await User.create(data)
    res.json({"message":"user created successfully",user})
    }
    catch(error){
        console.error(err)
        res.status(500).json({"message":"internal server error"})
    }
};

const getAllUsers =
 async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => 
{
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateuser=async(req,res)=>{
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
const deleteuser=async(req,res)=>{
  try{
  const id=req.params.id
  const user= await User.findByIdAndDelete(id)
  console.log("deleted")
  res.json({"message":"delete successfully",user})}
  catch(error){
      console.error(err)
      res.status(500).json({"message":"internal server error"})
  }
}
module.exports={
  createUser,
  getAllUsers,
  getUserById,
  updateuser,
  deleteuser
}