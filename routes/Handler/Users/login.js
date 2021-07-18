const jwt = require("jsonwebtoken");
const apiAdapter = require("../../apiAdapter");
const {
  URL_SERVICE_USER,
  JWT_SECRET,
  JWT_SECRET_REFRESH_TOKEN,
  JWT_ACCES_TOKEN_EXPIRED,
  JWT_REFRESH_TOKEN_EXPIRED,
} = process.env;
const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    const users = await api.post("/users/login", req.body);
    const data = users.data.data;
    const token = jwt.sign({ data }, JWT_SECRET, {
      expiresIn: JWT_ACCES_TOKEN_EXPIRED,
    });
    const refreshToken = jwt.sign({ data }, JWT_SECRET_REFRESH_TOKEN, {
      expiresIn: JWT_REFRESH_TOKEN_EXPIRED,
    });
    await api.post("/refresh_token", {
      refresh_token: refreshToken,
      user_id: data.id,
    });
    return res.json({
      status: "succes",
      data: {
        token: token,
        refreshToken: refreshToken,
      },
    });
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", massage: "service unavaliable" });
    }

    const { status, data } = error.response;
    return res.status(status).json({ data });
  }
};
