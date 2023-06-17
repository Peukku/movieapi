// Import required modules
import express from 'express';
import router from '@/routers/routes';

require('dotenv-flow').config();

const app = express();

app.use(express.json());

app.use(router);

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Running on PORT ${port}`);
});
