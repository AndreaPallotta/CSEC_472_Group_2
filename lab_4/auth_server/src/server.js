const express = require('express');
const cors = require('cors');
const axios = require('axios');
const qs = require('query-string'); // require('querystring')
const crypto = require('crypto');
const CryptoJS = require('crypto-js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by');

const secret = 'f21e0f82096b107c4671e522879d722d';

const formatToken = (token = '') => ({
  auth: token ? 'success' : 'fail',
  token,
});

const hash = (password) => CryptoJS.SHA256(password).toString();

const encryptToken = (token, secret) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-ctr', secret, iv);
  const encrypted = Buffer.concat([cipher.update(token), cipher.final()]);

  return {
    iv: iv.toString('hex'),
    access_token: encrypted.toString('hex'),
  };
};

const encryptResponse = (encryptedToken, password) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(encryptedToken),
    hash(password)
  ).toString();
};

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json(formatToken());
  }

  const options = {
    method: 'POST',
    auth: { username, password },
    data: qs.stringify({ grant_type: 'client_credentials' }),
    url: 'http://localhost:8081/token.php',
  };

  axios
    .request(options)
    .then(({ data }) => {
      if (!data.access_token) return res.status(400).send(formatToken());

      const encryptedToken = encryptToken(data.access_token, secret);
      const tokenJson = formatToken(encryptedToken);
      const encryptedRes = encryptResponse(tokenJson, password);

      return res.status(200).send(encryptedRes);
    })
    .catch(() => {
      return res.status(400).send(formatToken());
    });
});

module.exports = app;
