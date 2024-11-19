const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const alldbUsers = await User.find({});
  res.json(alldbUsers);
}

async function handleCreateUser(req, res) {
  const body = req.body;

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });

  return res.status(201).json({
    success: true,
    message: "User created successfully",
  });
}


async function displayAllUsers(req,res) {
     
        const alldbUsers  = await User.find({}) 
        const html = `<ul>
                         ${alldbUsers.map((user) => `<li>${user.firstName} --- ${user.email}</li>`).join('')}
                      </ul>`;
    
        res.send(html);
    
}

async function handleGetUserById(req,res) {
        const user =  await User.findById(req.params.id)
        res.send(user)
    
}

async function handleUpdateUserById(req,res) {
    
        const user = await User.findByIdAndUpdate(req.params.id , {lastName:'Jain'})
        console.log('user',user)
        return res.status(200).json({status :"success",message:'User updated successfully',id:user._id })
   
}

async function handleDeleteUserById(req,res) {
 
    
         await User.findByIdAndDelete(req.params.id)
    
        return res.status(200).json({status :"success",message:'User deleted successfully'})
      
}

module.exports = {
  handleGetAllUsers,
  handleCreateUser,
  displayAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById
};
