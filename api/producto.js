const Producto = require("../model/producto");

class ProductoController {
  constructor() {
    this.productos = [];
  }

  generar(cant = 10) {
    for (let i = 0; i < cant; i++) {
      this.productos.push(Producto.generarProducto());
    }

    return this.productos;
  }
}

module.exports = new ProductoController();
