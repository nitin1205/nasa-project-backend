const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const planetsRouter = require('./routes/planets/planets.router');
const lauchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
}));
app.use(morgan('combined'));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/root'));
app.use('/planets', planetsRouter);
app.use('/launches', lauchesRouter);

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'public', 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: "404 Not FOund" });
    } else {
        res.type('txt').send('404 Not Found');
    }
});

module.exports = app;