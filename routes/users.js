const express = require('express');

const router = express.Router();

router.route('/').get(async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: 'get route'
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err
    });
  }
});

module.exports = router;
