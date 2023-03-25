class ProductManager {

  constructor() {
    this.products = [];
  }

  getProducts = () => {
    return this.products;
  };

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };


    const validationCode = this.products.find(
      (product) => product.code === code
    );

    if (validationCode) {
      console.error("Ya existe un producto con el mismo código.");
      return;
    } else {
      if (this.products.length === 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }

      this.products.push(product);
    }
  };

  getProductById = (id) => {
    const ProductId = this.products.find((p) => p.id === id);
    if (!ProductId) {
      console.error("Producto no encontrado.");
    }
    return ProductId;
  };
}

const persona1 = new ProductManager();

persona1.addProduct("pizza", "description", 5, "thumbnail", 5, 5);
persona1.addProduct("plaza", "coco", 5, "thumbnail", 5, 5);

console.log(persona1.getProducts());
