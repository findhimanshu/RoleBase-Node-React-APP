const execute = require("../utils/executer");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const getUserPermission = require("../utils/userPermissions");
// POST login

const login = async (req, res, next) => {
  const { body } = req;

  let user = await isUserAvailable(body.userName, body.passWord);

  if (!user)
    return res.status(401).json({ message: "Invalid username or password" });
  const token = generateAccessToken(user[0].id);
  let permissions = await getUserPermission(user[0].id);
  res.status(200).json({
    message: "Login successfull",
    token: token,
    permissions: permissions,
  });
};

const isUserAvailable = async (username, passWord) => {
  let query = `select * from users where username='${username}' and password=md5('${passWord}')`;
  let result = await execute(query);

  if (result.length == 0) return false;
  return result;
};

const generateAccessToken = (userId) => {
  return jwt.sign(userId, process.env.TOKEN_SECRET);
};

module.exports = login;
