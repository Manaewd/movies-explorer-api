const router = require('express').Router();
const userRoutes = require('./users');
const movieRoutes = require('./movies');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-error');
const { createUser, login, getLogout } = require('../controllers/users');
const { validateUserCreate, validationLogin } = require('../middlewares/validate');

router.post('/signin', validationLogin, login);
router.post('/signup', validateUserCreate, createUser);

router.use(auth);
router.get('/logout', getLogout);
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);

router.use((req, res, next) => {
  next(new NotFoundError('Что-то пошло не так'));
});

module.exports = router;
