import mongoose from "mongoose";

const { MONGODB_URI, DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

export const connectDB = async () => {
  console.log("connectedDB");

  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return mongoose;
  }

  const opts = {
    bufferCommands: false,
    loggerLevel: "info",
    // autoCreate: true,
    // autoIndex: true,
  };

  // Use new db connection
  await mongoose.connect(
    MONGODB_URI || `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
  );

  console.log("mogoose is connected!");

  return mongoose;
};

export const dbClient = async () => (await connectDB()).connection.getClient();

export const withMongodb = (handler) => async (req, res) => (
  await connectDB(), handler(req, res)
);

export default withMongodb;

/////////////////////////////////////////////////////////////////////////
// import mongoose from "mongoose";

// // const PORT = process.env.PORT || 8000;

// const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// const connectDB = (handler) => async (req, res) => {
//   console.log("connectDB");

//   if (mongoose.connections[0].readyState) {
//     // Use current db connection
//     return handler(req, res);
//   }
//   // Use new db connection
//   await mongoose.connect(
//     `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
//   );
//   // .then(() => {
//   console.log("mogoose connect!");
//   //   app.listen(PORT);
//   // });
//   return handler(req, res);
// };

// ///////////////////////////////////////////////////////////////////////
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

// export default connectDB;
///////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////
