import connectDB from "../../middlware/mongodb";
import bcrypt from "bcrypt";
import User from "../../models/user";
import questionaries from "../../models/questionarie";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, gender, email, phone, birthday } = JSON.parse(req.body);
    console.log("email", email);
    if (email) {
      try {
        // Hash password to store it in DB
        // const passwordhash = await bcrypt.hash(password, 10);
        const user = new User({
          acssesToken,
          name,
          gender,
          email,
          image,
          emailVerified,
          phone,
          birthday,
          points,
          messeges,
          alerts,
          questionaries,
          role,
          timestamps,
        });
        // Create new user

        const userCreated = await user.save();

        console.log("done");
        res.status(200).send(userCreated);
      } catch (error) {
        console.log("fail");
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
//////////////////////////////////////////////////////////////////////////////////
// import connectDB from "../../middlware/mongodb";
// import bcrypt from "bcrypt";
// import User from "../../models/user";
// import Questionarie from "../../models/questionarie";
// import Cookies from "cookies";
// import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
// import { unstable_getServerSession } from "next-auth";

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     // const check = await unstable_getServerSession(req, res);
//     console.log("HANDLER", req.cookies);

//     const { accessToken, email, name, image } = JSON.parse(req.body);

//     // console.log("accessToken", session);

//     // const cookies = new Cookies(req, res);
//     // cookies.set("access_token", accessToken);

//     const userCreated = await User.findOneAndUpdate(
//       {
//         email,
//       },
//       {
//         name,
//         image,
//         accessToken,
//       },
//       { upsert: true }
//     );

//     // res?

//     // setCookie("accessToken", accessToken, {
//     //   req,
//     //   res,
//     //   maxAge: 60 * 60 * 24,
//     //   // httpOnly: true,
//     // });

//     return res.status(200).json({ message: "ok" });

//     // const {
//     //   userName,
//     //   gender,
//     //   email,
//     //   phoneNumber,
//     //   birthday,
//     //   points,
//     //   messeges,
//     //   alerts,
//     //   questionaries,
//     // } = req.body;
//     // if (userName && gender && email && phoneNumber && birthday) {
//     //   try {
//     //     // Hash password to store it in DB
//     //     // const passwordhash = await bcrypt.hash(password, 10);
//     //     const user = new User({
//     //       userName,
//     //       gender,
//     //       email,
//     //       phoneNumber,
//     //       birthday,
//     //       points,
//     //       messeges,
//     //       alerts,
//     //       questionaries,
//     //     });
//     //     // Create new user
//     //     const userCreated = await user.save();
//     //     res.status(200).send(userCreated);
//     //   } catch (error) {
//     //     res.status(500).send(error.message);
//     //   }
//     // } else {
//     //   res.status(422).send("data_incomplete");
//     // }
//   } else if (req.method === "GET") {
//     const { _id } = req.query;

//     if (_id !== undefined) {
//       User.findById(_id)
//         .populate("questionarie")
//         .then((user) => {
//           console.log(user);
//           res.send(user);
//         })
//         .catch((e) => {
//           res.status(403).send(e);
//         });
//     } else {
//       User.find()
//         .then((data) => {
//           res.send(data);
//         })
//         .catch((e) => {
//           res.status(403).send(e);
//         });
//     }
//   } else if (req.method === "DELETE") {
//     const { _id } = req.query;
//     if (_id) {
//       User.findByIdAndRemove(_id)
//         .then((data) => res.send(data))
//         .catch((e) => ("error", e));
//     }
//   } else if (req.method === "PATCH") {
//     const { _id } = req.query;
//     if (_id) {
//       const newInfo = req.body;
//       User.findByIdAndUpdate(_id, newInfo)
//         .then((data) => res.send(data))
//         .catch((e) => res.send("error", e));
//     }
//     if (_id) {
//       const newInfo = req.body;
//       User.findByIdAndUpdate(_id, newInfo)
//         .then((data) => res.send(data))
//         .catch((e) => res.send("error", e));
//     }
//   } else {
//     res.status(422).send("req_method_not_supported");
//   }
// };

// export default connectDB(handler);
