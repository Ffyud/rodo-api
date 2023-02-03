import express from 'express';
import cors from 'cors';
import User from './models/user.model.js'

const app = express();
const PORT = 8181;

var corsOptions = { // cross origin dingen
  origin: "http://localhost:8181"
};
  
await User.sync({ force: true }); // bij starten steeds schone tabel maken

app.use(cors(corsOptions));
  
// parse requests of content-type - application/json
app.use(express.json());
  
app.use('/', express.static('public'));

app.post('/user', async (req, res) => {
  const new_user = User.build({ 
    username: req.body.username, 
    team: req.body.team
  })
  await new_user.save();
  res.status(201)
  res.send(req.body)
});

app.get('/user', async (req, res) => {
  const all_users = await User.findAll();
  res.status(200)
  res.send(all_users)
})

app.get('/user/', async (req, res) => {
  const user = await User.findAll({
    where: {
      id: 2
    }
  });
  res.status(200)
  res.send(user)
})

app.listen(PORT, () => {
    console.log(`De server doet het op ${PORT}`);
});
