const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mainRouter = require('./routes/index');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000', // Especifica el origen permitido
    credentials: true, // Permite el envío de cookies y encabezados personalizados
    methods: 'GET, POST, PUT, DELETE', // Especifica los métodos HTTP permitidos
    allowedHeaders: 'Content-Type, Authorization', // Especifica los encabezados permitidos
  })
);

app.use(express.json());

app.use(cookieParser());
app.use(morgan('dev'));

app.use(mainRouter);

module.exports = app;
