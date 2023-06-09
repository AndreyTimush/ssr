import express from "express";
import { renderToString } from "react-dom/server";
import { indexTemplate } from "./indexTemplate";
import App from "../shared/App";

const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
  res.send(indexTemplate(renderToString(App())));
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
