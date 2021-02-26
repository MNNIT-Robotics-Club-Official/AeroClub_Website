const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();
const oauth2Client = new OAuth2(
  process.env.CLIENTID,
  process.env.CLIENTSECRET, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESHTOKEN
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
       type: "OAuth2",
       user: "aeroclubmern@gmail.com", 
       clientId: process.env.CLIENTID,
       clientSecret: process.env.CLIENTSECRET,
       refreshToken: process.env.REFRESHTOKEN,
       accessToken: accessToken,
       tls: {
        rejectUnauthorized: false
      }
  }
});

module.exports = { smtpTransport };