import { getToken } from "next-auth/jwt";
import connectDB from "../../middlware/mongodb";
import Questionarie from "../../models/questionarie";
import User from "../../models/user";
const secret = process.env.NEXTAUTH_SECRET;

const deleteHandler = async (req, res) => {
  if (req.method === "DELETE") {
    console.log("t0oDEL");
    console.log("req.body", req.body);
    const _id = req.body;
    console.log("_id", _id);
    if (_id) {
      Questionarie.findByIdAndRemove(_id)
        .then((data) => res.send(data))
        .catch((e) => ("error", e));
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(deleteHandler);
