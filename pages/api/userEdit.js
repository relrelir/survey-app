import connectDB from "../../middlware/mongodb";
import bcrypt from "bcrypt";
import User from "../../models/user";
import questionaries from "../../models/questionarie";
import { getToken } from "next-auth/jwt";

const editUserHandler = async (req, res) => {
  if (req.method === "PATCH") {
    console.log("req.body", req.body);
    let token = await getToken({ req });
    if (!token) {
      res.status(403).send("req_not_authorized");
    } else {
      const { name, email, gender, phone, birthday } = req.body;
      User.findByIdAndUpdate(token.sub, {
        name,
        email,

        gender,
        phone,
        birthday,
      })
        .then((user) => res.status(200).json(user))
        .catch((e) => res.status(400).json({ error: e.messege }));
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(editUserHandler);
