import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.route.js';

const app = express();
const PORT = 8181;

var corsOptions = { // cross origin dingen
  origin: "http://localhost:8181"
};
  
app.use(cors(corsOptions));
  
// parse requests of content-type - application/json
app.use(express.json());
  
app.use('/', express.static('public'));

app.use(userRouter)

app.get('/question', async (req, res) => {
  const user = await Question.findAll();
  res.status(200)
  res.send(user)
})

app.listen(PORT, () => {
    console.log(`De server doet het op ${PORT}`);
});
