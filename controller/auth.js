// const Users = require('../model/Users');

//@desc   Register Users
//@route  Post /api/v1/auth/register
//@access public
exports.register = async (req, res, next) => {
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
};

//@desc   Login Users
//@route  Post /api/v1/auth/login
//@access public
exports.login = async (req, res, next) => {
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
};

//@desc   protect route
//@route  middleware
//@access public
exports.protect = async (req, res, next) => {
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
};

//@desc   users profile
//@route  Get /api/v1/auth/profile
//@access profile
exports.profile = async (req, res, next) => {
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
};
