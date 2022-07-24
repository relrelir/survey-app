import connectDB from "../../middlware/mongodb";
import Question from "../../models/question";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, introduction, answers } = req.body;
    if (title && answers) {
      try {
        const question = new Question({ title, introduction, answers });

        const questionCreated = await question.save();
        res.status(200).send(questionCreated);
      } catch (error) {
        res.status(500).send(error.messege);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    const { _id } = req.query;
    if (_id !== undefined) {
      Question.findById(_id)
        .then((data) => {
          res.send(data);
        })
        .catch((e) => ("error", e));
    } else {
      Question.find()
        .then((data) => {
          res.send(data);
        })
        .catch((e) => ("error", e));
    }
  } else if (req.method === "DELETE") {
    const { _id } = req.query;
    if (_id) {
      Question.findByIdAndRemove(_id)
        .then((data) => res.send(data))
        .catch((e) => ("error", e));
    }
  } else if (req.method === "PATCH") {
    const { _id } = req.query;
    if (_id) {
      const newInfo = req.body;
      Question.findByIdAndUpdate(_id, newInfo)
        .then((data) => res.send(data))
        .catch((e) => res.send("error", e));
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
