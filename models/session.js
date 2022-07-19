import mongoose, { Schema, ObjectId } from "mongoose";


export const SessionSchema = new Schema({
  sessionToken:  {type: String, required: false},
  userId: {type: ObjectId, ref: 'User', required: true},
  expires: {type: Date, required: false}
})

export default mongoose.models.Session || mongoose.model('Session', SessionSchema)
