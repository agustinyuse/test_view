const faker = require("faker");

class ProductoModel {
  constructor() {}

  generarId() {
    return faker.datatype.uuid();
  }

  generarProducto() {
    return {
      id: faker.datatype.uuid(),
      nombre: faker.name.firstName(),
      precio: faker.commerce.price(),
      foto: faker.image.avatar(),
    };
  }
}

module.exports = new ProductoModel();
