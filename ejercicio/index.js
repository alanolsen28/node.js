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

  addProduct = async (
    title,
    description,
    price,
    thumbnail,
    code,
    stock
    ) => {
    
    try {

    const products = await this.getProducts()

    if(!title || !description || !price || !thumbnail || !code || !stock) {
        console.log(`Todos los campos son obligatorios, por favor revisa tu entrada.`)
        return
    }

    const producto = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    };
    
    const foundCode = products.find(prod => prod.code === producto.code)

    if(!foundCode){
        
        if (products.length === 0){
            producto.id = 1
        } else{
            producto.id = products[products.length - 1].id + 1
        }
        products.push(producto)
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'))
    } else{
        console.log(`El código de producto ${producto.code} coincide con uno existente, coloque otro por favor.`)
    }

    } catch (error) {
        console.log(error)
    }

}

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

const manager = new ProductManager('./fileJSON.json')

console.log(await manager.getProducts())

await manager.addProduct('torta', 'dulcedeleche', 100, 'sin imagen', 'abc123', 10)
await manager.addProduct('torta', 'chocolate', 150, 'sin imagen', 'abc1234', 20)
await manager.addProduct('fanta', 'comun', 200, 'sin imagen', 'abc12345', 30)
await manager.addProduct('papas', 'crocantes', 300, 'sin imagen', 'abc123456', 40)

console.log(await manager.getProducts())
console.log(await manager.getProductById(2))

