const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use("/", require("./Routes/homeRoute"));
app.use("/about", require("./Routes/homeRoute"));
app.use("/meals", require("./Routes/homeRoute"));
app.use("/connect", require("./Routes/homeRoute"));
app.use("/clothes", require("./Routes/homeRoute"));
app.use("/women", require("./Routes/homeRoute"));
app.use("/men", require("./Routes/homeRoute"));
app.use("/children", require("./Routes/homeRoute"));

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
