// Import required modules
import express from 'express';

require('dotenv-flow').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Running on PORT ${port}`);
});