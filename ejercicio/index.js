import ProductManager from "./managers/ProductManager.js";

const manager = new ProductManager('./files/Usuarios.json');

const env = async () => {


const productos = await manager.getProducts(path);

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

   await manager.createUser(user);

  const result = await manager.createProduct(producto);

  const ProdResult = await manager.getProducts();

  console.log(ProdResult);

};

env()

