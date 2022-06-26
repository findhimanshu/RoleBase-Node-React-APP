const getUserPermission = require("../utils/userPermissions");
const Mapper = require("../utils/permissionMapper");
const checkUserPermission = async (req, res, next) => {
  const userId = req.user;
  const method = req.method;
  const userPermissions = await getUserPermission(userId);

  if (userPermissions.includes(Mapper[method])) next();
  else res.status(401).json({ message: "Not authorized to access endpoint" });
};

module.exports = checkUserPermission;
