import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

// SPA fallback:
app.get("*", (_, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(3000, () => console.log("Server running on port 3000"));
