import mongoose, { Schema, ObjectId } from "mongoose";

export const VerificationTokenSchema = new Schema({
  identifier: { type: String, required: false },
  expires: { type: Date, required: false },
  token: { type: String, required: false },
});

export default mongoose.models.VerificationToken ||
  mongoose.model("VerificationToken", VerificationTokenSchema);
