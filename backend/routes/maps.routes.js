const express = require('express');
const { query } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();
const mapsController = require('../controllers/maps.controller');

// validate that `address` exists and is not empty
router.get(
  '/coordinates',
  [
    query('address')
      .notEmpty()
      .withMessage('Address query param is required')
  ],
  mapsController.getCoordinates
);

router.get('/get-distance-time',
  query('origin').isString().isLength({ min: 3 }),
  query('destination').isString().isLength({ min: 3 }),
  mapsController.getDistanceAndTime
);

router.get('/get-suggestions',
  query('input').isString().isLength({ min: 3 }),
  mapsController.getAutoCompleteSuggestions
);

module.exports = router;
