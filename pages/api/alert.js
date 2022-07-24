import connectDB from "../../middlware/mongodb";
import Alert from "../../models/alert";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, content } = req.body;
    if (title && content) {
      try {
        const Alert = new Alert({ title, content });

        const AlertCreated = await alert.save();
        res.status(200).send(AlertCreated);
      } catch (error) {
        res.status(500).send(error.messege);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    const { _id } = req.query;
    if (_id !== undefined) {
      Alert.findById(_id)
        .then((data) => {
          res.send(data);
        })
        .catch((e) => ("error", e));
    } else {
      Alert.find()
        .then((data) => {
          res.send(data);
        })
        .catch((e) => ("error", e));
    }
  } else if (req.method === "DELETE") {
    const { _id } = req.query;
    if (_id) {
      Alert.findByIdAndRemove(_id)
        .then((data) => res.send(data))
        .catch((e) => ("error", e));
    }
  } else if (req.method === "PATCH") {
    const { _id } = req.query;
    if (_id) {
      const newInfo = req.body;
      Alert.findByIdAndUpdate(_id, newInfo)
        .then((data) => res.send(data))
        .catch((e) => res.send("error", e));
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
