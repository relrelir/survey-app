import connectDB from "../../middlware/mongodb";
import messege from "../../models/messege";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { sentBy, title, content } = req.body;
    if (sentBy && title && content) {
      try {
        const messege = new messege({ sentBy, title, content });

        const messegeCreated = await messege.save();
        res.status(200).send(messegeCreated);
      } catch (error) {
        res.status(500).send(error.messege);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    const { _id } = req.query;
    if (_id !== undefined) {
      messege
        .findById(_id)
        .then((data) => {
          res.send(data);
        })
        .catch((e) => ("error", e));
    } else {
      messege
        .find()
        .then((data) => {
          res.send(data);
        })
        .catch((e) => ("error", e));
    }
  } else if (req.method === "DELETE") {
    const { _id } = req.query;
    if (_id) {
      messege
        .findByIdAndRemove(_id)
        .then((data) => res.send(data))
        .catch((e) => ("error", e));
    }
  } else if (req.method === "PATCH") {
    const { _id } = req.query;
    if (_id) {
      const newInfo = req.body;
      messege
        .findByIdAndUpdate(_id, newInfo)
        .then((data) => res.send(data))
        .catch((e) => res.send("error", e));
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
