module.exports = (...roles) => {
  return (req, res, next) => {
    const role = req.user.data.role;
    if (!roles.includes(role)) {
      return res
        .status(405)
        .json({ massage: "you dont have permission", status: "error" });
    }
    return next();
  };
};
