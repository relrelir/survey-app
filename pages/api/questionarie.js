import connectDB from "../../middlware/mongodb";
import Questionarie from "../../models/questionarie";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, introduction, question, pointsValue } = req.body;
    if (title && question) {
      try {
        const questionarie = new Questionarie({
          title,
          introduction,
          question,
          pointsValue,
        });

        const questionarieCreated = await questionarie.save();
        res.status(200).send(questionarieCreated);
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    const { _id } = req.query;
    if (_id !== undefined) {
      Questionarie.findById(_id)
        .then((data) => {
          res.send(data);
        })
        .catch((e) => ("error", e));
    } else {
      Questionarie.find()
        .then((data) => {
          res.send(data);
        })
        .catch((e) => ("error", e));
    }
  } else if (req.method === "DELETE") {
    const { _id } = req.query;
    if (_id) {
      Questionarie.findByIdAndRemove(_id)
        .then((data) => res.send(data))
        .catch((e) => ("error", e));
    }
  } else if (req.method === "PATCH") {
    const { _id } = req.query;
    if (_id) {
      const newInfo = req.body;
      Questionarie.findByIdAndUpdate(_id, newInfo)
        .then((data) => res.send(data))
        .catch((e) => res.send("error", e));
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
