require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  verifyJWT(req, res, next) {
    const bearerHeader = req.headers["Aathorization"];
    const token = bearerHeader.replace("Bearer ", "");

    if (!token)
      return res
        .status(401)
        .send({ auth: false, message: "Nenhum token fornecido." });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err)
        return res
          .status(500)
          .send({ auth: false, message: "Falha na autenticação do token." });
      next();
    });
  },
};
