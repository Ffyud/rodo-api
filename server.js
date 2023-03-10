import express from 'express';
// import session from 'express-session';
import cors from 'cors';
import questionlistRouter from './routes/questionlist.route.js';
import questionRouter from './routes/question.route.js';
import teamRouter from './routes/team.route.js';
import userRouter from './routes/user.route.js';


process.on('uncaughtException', function (err) { // FIXME nettere afhandeling maken voor onjuiste requests
  console.error(err);
  console.log("Niet crashen aub. Annuleer je request effe...");
});

const app = express();
const PORT = 8181;

var corsOptions = {
  origin: "http://localhost:8181"
};
  
app.use(cors(corsOptions)); //  Cross-Origin Resource Sharing (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

app.use(express.json()); // Header "content-type" : application/json
  
// app.use(session); // TODO session gebruiken voor authenticatie (https://github.com/expressjs/session)

app.use('/', express.static('public'));

app.use(userRouter)
app.use(questionlistRouter)
app.use(questionRouter)
app.use(teamRouter)

app.listen(PORT, () => {
    console.log(`De server doet het op ${PORT}`);
});
