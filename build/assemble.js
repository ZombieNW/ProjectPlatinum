import fs from "fs";
import fse from "fs-extra";
import path from "path";

const dist = path.join(process.cwd(), "dist");

console.log("Delete old dist folder...");
fse.removeSync(dist);

console.log("Create new dist folder...");
fse.ensureDirSync(path.join(dist, "server"));
fse.ensureDirSync(path.join(dist, "public"));

console.log("Copy backend build...");
fse.copySync("backend/dist", path.join(dist, "server"));

console.log("Copy backend package.json...");
fse.copySync("backend/package.json", path.join(dist, "server/package.json"));

console.log("Copy frontend build...");
fse.copySync("frontend/build", path.join(dist, "public"));

console.log("Done");
console.log("Installing production node_modules inside dist/server...");
