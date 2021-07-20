const express = require("express");
const router = express.Router();
const controller = require("../api/producto");

router.get("/vista-test", (req, res) => {
  let mocks = controller.generar();
  res.json(mocks);
});

router.get("/vista-test/:cant", (req, res) => {
  if (Number(req.params.cant) === 0) {
    return res.status(400).json({ mensaje: "No hay productos" });
  }

  let mocks = controller.generar(req.params.cant);
  res.json(mocks);
});

module.exports = router;
