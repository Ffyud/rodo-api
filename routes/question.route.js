import express from "express";
import Question from "../models/question.model.js";

var questionRouter = express.Router();

await Question.sync({ force: true }); // tijdelijk: bij starten steeds schone tabel maken

questionRouter.post("/question", async (req, res) => {
    const new_question = Question.build({
        content: req.body.content,
        QuestionListId: req.body.questionlistId
    });
    await new_question.save();
    res.status(201);
    res.send(req.body);
});

questionRouter.get("/question", async (req, res) => {
    const all_questions = await Question.findAll();
    res.status(200);
    res.send(all_questions);
});

export default questionRouter;
