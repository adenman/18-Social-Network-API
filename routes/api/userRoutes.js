const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

const { addFriend, deleteFriend } = require('../../controllers/friendController');

// /api/users
router.route('/').get(getUsers).post(createUser);


// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

  router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;