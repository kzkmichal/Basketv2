// export const getProducts = async (callback) => {
//   const response = await fetch('http://localhost:3000/products');
//   const myJson = await response.json();
//   callback(myJson)
// };
export class ProductsModel {
  constructor() {
    this.server = "http://localhost:8000/products/";
  }
  async getProducts() {
    const response = await fetch(this.server);
    return await response.json();
  }
  async changeProduct(product) {
    const response = await fetch(
      `${this.server}${product.id}`,
      this.resonseMethod(product, "PUT")
    );
    return await response.json();
  }

  async setNewProduct(product) {
    const response = await fetch(
      this.server,
      this.resonseMethod(product, "POST")
    );
    return await response.json();
  }

  resonseMethod(product, method) {
    return {
      method: method,
      body: JSON.stringify({
        title: product.title,
        price: product.price,
        image: product.image,
        id: product.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
}
