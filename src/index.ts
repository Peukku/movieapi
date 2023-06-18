// Import required modules
import express from 'express';
import router from '@/routers/routes';
import mongoose from 'mongoose';

require('dotenv-flow').config();

const app = express();

app.use(express.json());
app.use(router);

mongoose.connect(`${process.env.DATABASE}`);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`ERROR - ${err.message}: ` + process.env.DATABASE);
});

require('@/models/Movie');

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Running on PORT ${port}`);
});
