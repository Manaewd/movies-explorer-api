const router = require('express').Router();
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');

const { validateMovieID, validateMovieCreate } = require('../middlewares/validate');

router.get('/', getMovies);
router.post('/', validateMovieCreate, createMovie);
router.delete('/:movieId', validateMovieID, deleteMovie);

module.exports = router;
