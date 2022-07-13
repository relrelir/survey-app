import mongoose from "mongoose";

// const PORT = process.env.PORT || 8000;

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

const connectDB = (handler) => async (req, res) => {
  console.log("connectDB");

  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
  );
  // .then(() => {
  console.log("mogoose connect!");
  //   app.listen(PORT);
  // });
  return handler(req, res);
};

// export const connectDBOnly = () => {
//   if (mongoose.connections[0].readyState) {
//     // Use current db connection
//     return mongoose.connection.db;
//   }
//   // Use new db connection
//   return mongoose.connect(
//     `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
//   );
// };

export default connectDB;

// import mongoose from "mongoose";

// const connectDB = (handler) => async (req, res) => {
//   console.log("connectDB");

//   if (mongoose.connections[0].readyState) {
//     // Use current db connection
//     return handler(req, res);
//   }
//   // Use new db connection
//   const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
//   await mongoose.connect(
//     `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
//   );
//   console.log("mogoose connect!");
//   return handler(req, res);
// };

// export default connectDB;
