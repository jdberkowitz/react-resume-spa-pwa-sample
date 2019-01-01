const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const cors = require('cors');

const outputDirectory = 'dist';

if (process.env.NODE_ENV === 'production') {
  app.use(cors());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://react-resume-pwa-sample.herokuapp.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use(express.static('dist'));
}

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT, () => console.log('running...'));
