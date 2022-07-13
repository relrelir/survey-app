import connectDB from "../../middlware/mongodb";
import bcrypt from "bcrypt";
import User from "../../models/user";
import Questionarie from "../../models/questionarie";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const {
      userName,
      gender,
      eMail,
      phoneNumber,
      birthday,
      points,
      messeges,
      alerts,
      questionaries,
    } = req.body;
    if (userName && gender && eMail && phoneNumber && birthday) {
      try {
        // Hash password to store it in DB
        // const passwordhash = await bcrypt.hash(password, 10);
        const user = new User({
          userName,
          gender,
          eMail,
          phoneNumber,
          birthday,
          points,
          messeges,
          alerts,
          questionaries,
        });
        // Create new user
        const userCreated = await user.save();
        res.status(200).send(userCreated);
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    const { _id } = req.query;

    if (_id !== undefined) {
      User.findById(_id)
        .populate("questionarie")
        .then((user) => {
          console.log(user);
          res.send(user);
        })
        .catch((e) => {
          res.status(403).send(e);
        });
    } else {
      User.find()
        .then((data) => {
          res.send(data);
        })
        .catch((e) => {
          res.status(403).send(e);
        });
    }
  } else if (req.method === "DELETE") {
    const { _id } = req.query;
    if (_id) {
      User.findByIdAndRemove(_id)
        .then((data) => res.send(data))
        .catch((e) => ("error", e));
    }
  } else if (req.method === "PATCH") {
    const { _id } = req.query;
    if (_id) {
      const newInfo = req.body;
      User.findByIdAndUpdate(_id, newInfo)
        .then((data) => res.send(data))
        .catch((e) => res.send("error", e));
    }
    if (_id) {
      const newInfo = req.body;
      User.findByIdAndUpdate(_id, newInfo)
        .then((data) => res.send(data))
        .catch((e) => res.send("error", e));
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
