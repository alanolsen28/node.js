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

    const ProductCode = this.products.find((p) => p.code === product.code);

    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.error("Todos los campos son obligatorios.");
    } else if (ProductCode) {
      console.error("Ya existe un producto con el mismo código.");
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
      console.error("Not found");
    }
    return ProductId;
  };
}

const persona = new ProductManager();

persona.addProduct("pizza", "description", 5, "thumbnail", 5, 5);


console.log(persona.getProducts());
