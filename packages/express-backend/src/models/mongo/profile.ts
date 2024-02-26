import { Schema, Model, Document, model } from "mongoose";
import { Profile } from "../profile";

const profileSchema = new Schema<Profile>(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    dateCreated: { type: String, required: true, trim: true },
    numGamesStarted: { type: Number, required: true, trim: true },
    numGamesCompleted: { type: Number, required: true, trim: true },
    averageTime: { type: Number, required: true, trim: true },
    longestNoHintStreak: { type: Number, required: true, trim: true },
    longestWinStreak: { type: Number, required: true, trim: true },
    currentWinStreak: { type: Number, required: true, trim: true },
  },
  { collection: "user_profiles" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;