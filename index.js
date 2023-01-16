import express from 'express';

const app = express();
const PORT = 8181;

app.use('/', express.static('public'));

let leden = [{"naam": "Rosa"}, {"naam": "Donald"}, {"naam": "David"}]
let testresp = { 
    "teams": [
        {"id": 1, "naam": "team 1", "leden": leden},
        {"id": 2, "naam": "team 2", "leden": null}
    ]
}

app.get('/teams', (req, res) => {
    res.json(testresp)
});

app.get('/team/:id?', (req, res) => {
   res.send("Hey, team id " + req.params.id)
});


app.listen(PORT, () => {
    console.log(`De server doet het op ${PORT}`);
});
