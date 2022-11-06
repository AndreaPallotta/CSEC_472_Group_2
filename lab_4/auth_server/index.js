const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by');

const formatToken = (token = "") => ({
    auth: token ? 'success' : 'fail',
    token
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json(formatToken());
    }

    axios.post('http://oauth-provider/token.php', 
    { 'grant_type': ' client_credentials' }, 
    {
        auth: { username, password }
    }).then(() => {})
    .catch(() => {})

    return res.status(400).json(formatToken());
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});