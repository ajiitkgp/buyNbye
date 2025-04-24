const UserToken = require("../models/userToken.js");
const jwt = require("jsonwebtoken");

const verifyRefreshToken = async (refreshToken) => {
  const privateKey = process.env.JWTREFRESHPRIVATEKEY;
  return new Promise(async (resolve, reject) => {
    try {
      const tokenFound = await UserToken.findOne({ token: refreshToken });
      if (!tokenFound) {
        return reject({ error: true, message: "NOT FOUND" });
      }
      jwt.verify(refreshToken, privateKey, (err, tokenDetails) => {
        if (err) {
          return reject({ error: false, message: "Invalid refresh token" });
        }
        resolve({
          tokenDetails,
          error: false,
          message: "Valid refresh token",
        });
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = verifyRefreshToken;
