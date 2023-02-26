import express from "express";
import User from "../models/user.model.js";

var userRouter = express.Router();

await User.sync({ force: true }); // bij starten steeds schone tabel maken

userRouter.post("/user", async (req, res) => {
    // een gebruiker toevoegen
    const new_user = User.build({
        username: req.body.username,
        loginCode: req.body.loginCode,
        TeamId: req.body.teamId
    });
    await new_user.save();
    res.status(201);
    res.send(req.body);
});

userRouter.get("/user", async (req, res) => {
    // alle gebruikers opvragen
    const all_users = await User.findAll();
    res.status(200);
    res.send(all_users);
});

userRouter.get("/user/:id", async (req, res) => {
    // gebruiker met id opvragen
    const user = await User.findAll({
        where: {
            id: req.params.id,
        }
    });
    res.status(200);
    res.send(user);
});

export default userRouter;
