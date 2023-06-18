import mongoose from 'mongoose';
require('dotenv-flow').config();

mongoose.connect(`${process.env.DATABASE}`);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`ERROR - ${err.message}: ` + process.env.DATABASE);
});

require('@/models/Movie');

import app from '@/app';
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(new Date().toLocaleString('fi-FI') + ` Running on PORT ${port}`);
});
