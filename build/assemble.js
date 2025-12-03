import fs from "fs";
import fse from "fs-extra";
import path from "path";

const dist = path.join(process.cwd(), "dist");

console.log("Delete dist folder...");
fse.removeSync(dist);

console.log("Create dist folder...");
fse.ensureDirSync(path.join(dist, "server"));
fse.ensureDirSync(path.join(dist, "public"));

console.log("Copying backend...");
fse.copySync("backend", path.join(dist, "server"));

console.log("Copying frontend...");
fse.copySync("frontend/build", path.join(dist, "public"));

console.log("Done!");
console.log("Run: node dist/server/index.js");
