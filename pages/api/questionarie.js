import { getToken } from "next-auth/jwt";
import connectDB from "../../middlware/mongodb";
import Questionarie from "../../models/questionarie";
import User from "../../models/user";

const secret = process.env.NEXTAUTH_SECRET;

const handler = async (req, res) => {
  console.log("try123");
  if (req.method === "POST") {
    const { title, introduction, isQuize, questions, pointsValue } = req.body;
    const token = await getToken({ req, secret });
    console.log("token:", token);
    const userId = token.sub;

    if (title) {
      try {
        let user = await User.findById(userId);
        console.log("user", user);
        console.log("userId", userId);
        const questionarie = new Questionarie({
          author: user,
          title,
          introduction,
          isQuize,
          questions,
          pointsValue,
        });

        const questionarieCreated = await questionarie.save();
        res.status(200).json(questionarieCreated);
      } catch (error) {
        res.status(500).send(error.messege);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    const { _id } = req.query;

    if (_id !== undefined) {
      Questionarie.findById(_id)
        .populate("author")
        .then((data) => {
          res.send(data);
        })
        .catch((e) => ("error", e));
    } else {
      Questionarie.find()
        .populate("author")
        // .skip(req.query.skip)
        // .limit(req.query.limit)
        .then((data) => {
          res.send(data);
          console.log("data", data);
        })
        .catch((e) => ("error", e));
    }
  } else if (req.method === "DELETE") {
    console.log("t0oDEL");
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
