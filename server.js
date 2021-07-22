const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dotenv = require("dotenv");

require("./database/connection");

dotenv.config();

const http = require("http").Server(app);
var io = require("socket.io")(http);

app.set("io", io);

app.use(express.static("public"));
app.set("productos", "./productos");

app.use((err, req, res, next) => {
  console.error(err.message);
  return res.status(500).send("Algo se rompio!");
});

const productsRouter = require("./routes/products.routes");
app.use("/productos", productsRouter);

const messagesRouter = require("./routes/messages.routes");
app.use("/mensajes", messagesRouter);

io.on("connect", (socket) => {
  console.log("usuario conectado");
});

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`);
});

http.on("error", (error) => {
  console.log("error en el servidor:", error);
});
