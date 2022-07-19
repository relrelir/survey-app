import mongoose, { Schema, ObjectId } from "mongoose";

export const AccountSchema = new Schema({
  access_token: { type: String, required: false },
  token_type: { type: String, required: false },
  id_token: { type: String, required: false },
  refresh_token: { type: String, required: false },
  scope: { type: String, required: false },
  expires_at: { type: Number, required: false },
  session_state: { type: String, required: false },
  providerAccountId: { type: String, required: false },
  userId: { type: ObjectId, ref: "User", required: true },
  provider: { type: String, required: false },
  type: {
    type: String,
    enum: ["oauth", "email", "credentials"],
    required: false,
  },
});

export default mongoose.models.Account ||
  mongoose.model("Account", AccountSchema);
