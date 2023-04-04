import fs from "fs";

export default class ProductManager {
  constructor(path) {
    this.path = path;
  }

  getProducts = async () => {
    try {
      if (fs.existsSync(this.path)) {
        const data = await fs.promises.readFile(this.path, "utf-8");

        console.log(data);

        const productos = JSON.parse(data);

        return productos;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  createProduct = async (product) => {
    try {
      const productos = await this.getProducts();

      if (productos.length === 0) {
        product.id = 1;
      } else {
        product.id = productos[productos.length - 1].id + 1;
      }

      productos.push(product);

      await fs.promises.writeFile(
        this.path,
        JSON.stringify(productos, null, "\t")
      );

      return product;
    } catch (error) {
      console.log(error);
    }
  };

  getProductById = async (id) => {
    const products = await this.getProducts();
    const productById = products.find((product) => product.id === id);
    productById
      ? console.log(productById)
      : console.log("No se encontró el producto.");
  };

  deleteProduct = async (id) => {
    try {
      let products = await this.getProducts();
      const productIndex = products.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        products.splice(productIndex, 1);
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(products, null, "\t")
        );
        console.log(await this.getProducts());
      } else {
        console.log("No se encontró el producto que desea eliminar.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateProduct = async (id, obj) => {
    try {
      let products = await this.getProducts();
      const productIndex = products.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        products[productIndex] = { ...products[productIndex], ...obj };
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(products, null, "\t")
        );
        console.log(await this.getProducts());
      } else {
        console.log("No se encontró el producto que desea actualizar.");
      }
    } catch (error) {
      console.log(error);
    }
  };
}
