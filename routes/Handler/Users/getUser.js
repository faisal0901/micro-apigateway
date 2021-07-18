const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_USER } = process.env;
const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    console.log(req.user);
    const id = req.user.data.id;
    const users = await api.get(`/users/${id}`);
    return res.json(users.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", massage: "service unavaliable" });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
