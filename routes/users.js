const router = require('express').Router();
const { validationUpdateUser } = require('../middlewares/validate');
const {
  getUserInfo, updateUserProfile,
} = require('../controllers/users');

router.get('/me', getUserInfo);
router.patch('/me', validationUpdateUser, updateUserProfile);

module.exports = router;
