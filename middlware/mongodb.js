import mongoose from "mongoose";

const PORT = process.env.PORT || 8000;

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`)
    .then(() => {
      app.listen(PORT);
    });
  return handler(req, res);
};

export default connectDB;
