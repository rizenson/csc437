"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var profile_exports = {};
__export(profile_exports, {
  default: () => profile_default
});
module.exports = __toCommonJS(profile_exports);
var import_mongoose = require("mongoose");
const profileSchema = new import_mongoose.Schema(
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
    currentWinStreak: { type: Number, required: true, trim: true }
  },
  { collection: "user_profiles" }
);
const ProfileModel = (0, import_mongoose.model)("Profile", profileSchema);
var profile_default = ProfileModel;
