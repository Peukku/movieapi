// Import required modules
import express from 'express';
import router from '@/routers/routes';
import mongoose from 'mongoose';
import { handleNotFound, handleValidationErrors, handleDevelopmentErrors } from '@/handlers/errorHandlers';

require('dotenv-flow').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(handleNotFound); // When no route matches, set 404 Not Found
app.use(handleValidationErrors); // mongo validation error -> 400 Bad Request
app.use(handleDevelopmentErrors); // verbose error messages (500 if nothing else set)

mongoose.connect(`${process.env.DATABASE}`);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`ERROR - ${err.message}: ` + process.env.DATABASE);
});

require('@/models/Movie');

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(new Date().toLocaleString('fi-FI') + ` Running on PORT ${port}`);
});
