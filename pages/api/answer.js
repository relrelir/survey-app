import connectDB from "../../middlware/mongodb";
import Answer from "../../models/answer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { content, isCorrect, pointsValue, users } = req.body;
    if (content) {
      try {
        const Answer = new Answer({ content, isCorrect, pointsValue, users });

        const AnswerCreated = await answer.save();
        res.status(200).send(AnswerCreated);
      } catch (error) {
        res.status(500).send(error.messege);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    const { _id } = req.query;
    if (_id !== undefined) {
      Answer.findById(_id)
        .then((data) => {
          res.send(data);
        })
        .catch((e) => ("error", e));
    } else {
      Answer.find()
        .then((data) => {
          res.send(data);
        })
        .catch((e) => ("error", e));
    }
  } else if (req.method === "DELETE") {
    const { _id } = req.query;
    if (_id) {
      Answer.findByIdAndRemove(_id)
        .then((data) => res.send(data))
        .catch((e) => ("error", e));
    }
  } else if (req.method === "PATCH") {
    const { _id } = req.query;
    if (_id) {
      const newInfo = req.body;
      Answer.findByIdAndUpdate(_id, newInfo)
        .then((data) => res.send(data))
        .catch((e) => res.send("error", e));
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
