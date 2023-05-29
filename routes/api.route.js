const router = require('express').Router();
const weatherController = require('../controllers/weatherController')
const authController = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
//Route for the weather Routes
router.get('/weather',authMiddleware.authenticateToken, weatherController.getWeather)
router.post('/location', authMiddleware.authenticateToken, weatherController.updateLocation)

//Routes for the auth
router.post('/signup', authController.signup);
router.post('/login', authController.login);
module.exports = router;
