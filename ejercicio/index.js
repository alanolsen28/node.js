import path from "path";
import ProductManager from "./managers/ProductManager.js";

const manager = new ProductManager(path);

const env = async () => {

try {

  const productos = await manager.getProducts();

  console.log(productos);

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
  };

  const result = await manager.createProduct(producto);

  const ProdResult = await manager.getProducts();

  console.log(ProdResult);


  
} catch (error) {
   
  console.log(error);
}

};

env();

product.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
