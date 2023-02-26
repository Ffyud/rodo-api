import express from "express";
import Question from "../models/question.model.js";
import QuestionList from "../models/questionlist.model.js";

var questionlistRouter = express.Router();

await QuestionList.sync({ force: true }); // tijdelijk: bij starten steeds schone tabel maken

questionlistRouter.post("/questionlist", async (req, res) => {
    const new_questionlist = QuestionList.build({
        name: req.body.name
    });
    await new_questionlist.save();
    res.status(201);
    res.send(req.body);
});

questionlistRouter.get("/questionlist", async (req, res) => {
    const all_questionlists = await QuestionList.findAll();
    res.status(200);
    res.send(all_questionlists);
});

questionlistRouter.get("/questionlist/:id", async (req, res) => {
    const questionlist = await QuestionList.findAll({
        where: {
            id: req.params.id
        },
        include: [{
            model: Question,
            required: false,
            where: {questionlistId: req.params.id}
        }]
    });
    res.status(200);
    res.send(questionlist);
});

export default questionlistRouter;
