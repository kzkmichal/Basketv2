// export const getProducts = async (callback) => {
//   const response = await fetch('http://localhost:3000/products');
//   const myJson = await response.json();
//   callback(myJson)
// };
export class ProductsModel {
  async getProducts() {
    const response = await fetch("http://localhost:5000/products");
    return await response.json();
  }
}

class Search {
  async getProducts() {
    const response = await fetch("http://localhost:5000/products");
    this.result = await response.json();
  }
}

const instanceProduct = new Search();

export default instanceProduct; //?????
