import mongoose, { Schema, ObjectId } from "mongoose";

export const AlertSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Alert || mongoose.model("Alert", AlertSchema);
