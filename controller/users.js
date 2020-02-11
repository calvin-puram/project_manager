exports.getUser = async (req, res, next) => {
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
