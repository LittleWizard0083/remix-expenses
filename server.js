import path from "node:path";
import { fileURLToPath } from 'url';

import { broadcastDevReady, createRequestHandler } from "@remix-run/node";
import express from "express";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUILD_DIR = path.resolve(__dirname, "build");
const build = BUILD_DIR;

const app = express();

// ... code for setting up your express app goes here ...

app.all(
  "*",
  createRequestHandler({
    build,
    mode: build.mode,
  })
);

const port = 8002;
app.listen(port, () => {
  console.log(`👉 http://localhost:${port}`);

  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }
});
