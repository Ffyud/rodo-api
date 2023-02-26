import Team from "../models/team.model.js";
import User from "../models/user.model.js";
import express from "express";

var teamRouter = express.Router();

await Team.sync({ force: true }); // bij starten steeds schone tabel maken

teamRouter.post("/team", async (req, res) => {
    // een team toevoegen
    const new_team = Team.build({
        name: req.body.name
    });
    await new_team.save();
    res.status(201);
    res.send(req.body);
});

teamRouter.get("/team", async (req, res) => {
    // alle teams opvragen
    const all_teams = await Team.findAll();
    res.status(200);
    res.send(all_teams);
});

teamRouter.get("/team/:id", async (req, res) => {
    // team met id opvragen
    const team = await Team.findAll({
        where: {
            id: req.params.id,
        },
        include: [{
            model: User,
            required: false,
            allowNull: true,
            where: {teamId: req.params.id}
        }]
    });
    res.status(200);
    res.send(team);
});

export default teamRouter;
