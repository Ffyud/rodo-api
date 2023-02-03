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


// FIXME deze routes verplaatsen naar aparte route.js structuur

app.post('/user', async (req, res) => { // een gebruiker toevoegen
  const new_user = User.build({ 
    username: req.body.username, 
    team: req.body.team
  })
  await new_user.save();
  res.status(201)
  res.send(req.body)
});

app.get('/user', async (req, res) => { // alle gebruikers opvragen
  const all_users = await User.findAll();
  res.status(200)
  res.send(all_users)
})

app.get('/user/:id', async (req, res) => { // gebruiker met id opvragen
  const user = await User.findAll({
    where: {
      id: req.params.id
    }
  });
  res.status(200)
  res.send(user)
})

app.get('/question', async (req, res) => {
  const user = await Question.findAll();
  res.status(200)
  res.send(user)
})

app.listen(PORT, () => {
    console.log(`De server doet het op ${PORT}`);
});
