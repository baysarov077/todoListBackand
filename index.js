const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(require("./routes/"));

mongoose
  .connect(
    "mongodb+srv://baysarov077:Avenger95@cluster0.9anwb.mongodb.net/todos?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешное соединение..."))
  .catch(() => console.log("Не удалось соединиться!"));

app.listen(4000, () => {
  console.log("Сервер запущен...");
});
