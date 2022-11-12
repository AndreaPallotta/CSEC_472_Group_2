const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by');

const secret = 'f21e0f82096b107c4671e522879d722d';

const tokenDecrypt = ({ iv, access_token }, secret) => {
  const decipher = crypto.createDecipheriv(
    'aes-256-ctr',
    secret,
    Buffer.from(iv, 'hex')
  );
  return Buffer.concat([
    decipher.update(Buffer.from(access_token, 'hex')),
    decipher.final(),
  ]).toString();
};

app.post('/validateToken', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res
      .status(400)
      .json({ success: false, msg: 'Request does not include token' });
  }

  try {
    const accessToken = tokenDecrypt(token, secret);
    return res
      .status(200)
      .json({ success: true, msg: 'Successfully decrypted token' });
  } catch ({ message }) {
    return res
      .status(500)
      .json({ success: false, msg: `Error decrypting token: ${message}` });
  }
});

module.exports = app;
