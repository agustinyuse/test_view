const ProductRepository = require("../repository/product-repository");

class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  generate(cant = 10) {
    try {
      return this.productRepository.generate(cant);
    } catch (err) {
      console.log(err.Message);
    }
  }

  async findAll() {
    try {
      return await this.productRepository.findAll();
    } catch (err) {
      console.log(err.Message);
    }
  }

  async findById(id) {
    try {
      return await this.productRepository.findById(id);
    } catch (err) {
      console.log(err.Message);
    }
  }

  async create(data) {
    try {
      return await this.productRepository.create(data);
    } catch (err) {
      console.log(err.Message);
    }
  }

  async update(id, data) {
    try {
      return await this.productRepository.update(id, data);
    } catch (err) {
      console.log(err.Message);
    }
  }

  async delete(id) {
    try {
      return await this.productRepository.delete(id);
    } catch (err) {
      console.log(err.Message);
    }
  }
}

module.exports = new ProductController();
