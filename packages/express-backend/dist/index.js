"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var import_mongoConnect = require("./mongoConnect");
var import_profiles = __toESM(require("./profiles"));
var path = __toESM(require("path"));
const frontend = "lit-frontend";
let cwd = process.cwd();
let dist;
let indexHtml;
try {
  indexHtml = require.resolve(frontend);
  dist = path.dirname(indexHtml.toString());
} catch (error) {
  console.log(`Could not resolve ${frontend}:`, error.code);
  dist = path.resolve(cwd, "..", frontend, "dist");
  indexHtml = path.resolve(dist, "index.html");
}
console.log("server is static from ", dist);
const app = (0, import_express.default)();
const port = process.env.PORT || 3e3;
app.use(import_express.default.static(dist));
app.use((0, import_cors.default)());
app.use(import_express.default.json());
(0, import_mongoConnect.connect)("ProSet");
app.get("/hello", (req, res) => {
  res.send("Hello, World");
});
app.get("/api/profile/:userid", (req, res) => {
  const { userid } = req.params;
  import_profiles.default.get(userid).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.post("/api/profiles", (req, res) => {
  const newProfile = req.body;
  import_profiles.default.create(newProfile).then((profile) => res.status(201).send(profile)).catch((err) => res.status(500).send(err));
});
app.put("/api/profiles/:userid", (req, res) => {
  const { userid } = req.params;
  const newProfile = req.body;
  import_profiles.default.update(userid, newProfile).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
