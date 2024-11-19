const express = require('express');
const { handleGetAllUsers, handleCreateUser, displayAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById } = require('../controllers/user');
const router = express.Router()

// router.get('/' , handleGetAllUsers)
// router.post('/', handleCreateUser)
// router.get('/display', displayAllUsers);
// router.get('/:id' , handleGetUserById)
// router.patch('/:id',handleUpdateUserById)
// router.delete('/:id',handleDeleteUserById)


 
router
  .route('/')
  .get(handleGetAllUsers)   
  .post(handleCreateUser);   

router
  .route('/display')
  .get(displayAllUsers);     

router
  .route('/:id')
  .get(handleGetUserById)   
  .patch(handleUpdateUserById)  
  .delete(handleDeleteUserById);  


module.exports = router;