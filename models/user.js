import mongoose from "mongoose";

const { Schema } = mongoose;

export const UserSchema = new Schema(
  {
    accessToken: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    image: {
      type: String,
      required: false,
    },
    emailVerified: {
      type: Date,
      required: false,
    },
    role: {
      type: String,
      enum: ["user", "editor", "moderator", "admin"],
      required: false,
    },
    gender: {
      type: String,
      enum: ["none", "male", "female", "other"],
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    birthday: {
      type: Date,
      required: true,
    },
    points: {
      type: Number,
      default: 0,
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    alerts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Alert",
      },
    ],
    questionaries: [
      {
        type: Schema.Types.ObjectId,
        ref: "Questionarie",
      },
    ],
  },
  {
    id: true,
    toJSON: {
      transform(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;

        return ret;
      },
    },
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
