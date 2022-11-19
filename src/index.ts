import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express'
import helmet from 'helmet';
import morgan from 'morgan';

import config from './config/index';

const app = express();

app.get('/', (req, res) => {
    res.send({ title: 'Hello, world (again)!' });
});

app.get('/status', (req, res) => { res.status(200).end(); });
app.head('/status', (req, res) => { res.status(200).end(); });
app.enable('trust proxy');

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(config.port);