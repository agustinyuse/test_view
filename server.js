const express = require("express");

// creo una app de tipo express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routes/productos");
app.use("/productos", router);

// protejo el servidor ante cualquier excepcion no atrapada
app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).send("Algo se rompio!");
});

// obtengo el puerto del enviroment o lo seteo por defecto
const PORT = process.env.PORT || 3000;

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`);
});

// en caso de error, avisar
server.on("error", (error) => {
  console.log("error en el servidor:", error);
});
