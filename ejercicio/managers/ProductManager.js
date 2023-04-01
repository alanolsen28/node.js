import fs from "fs";

export default class ProductManager {

  constructor() {
    this.path = "./files/Products.json";
   
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

      await fs.promises.writeFile(this.path, JSON.stringify(productos, null, "\t"));

      return product;

    } catch (error) {
      console.log(error);
    }
  };

  getProductById = (id) => {
    const ProductId = this.products.find(p => p.id === id);
    if (!ProductId || ProductId === undefined) {
      return console.log("Not found product with id");
    } else {
          console.log(ProductId);;
    }
    return ProductId;
  };

  deleteProduct = (id) => {
    const ProductId = this.products.find(p => p.id === id);
    if (!ProductId || ProductId === undefined) {
      return console.log("Not found product with id");
    } else {
          console.log(ProductId(this.products.indexOf()));;
    }
    return ProductId;
  };


  updateProduct = (id) => {
   const ProductId = this.products.find(p => p.id === id);
   if (!ProductId || ProductId === undefined) {
      return console.log("Not found product with id");
    } else {
        console.log(...ProductId);;
     }
    return ProductId;
   };

}




