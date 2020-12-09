import { ProductsModel } from "../models/products.model.js";
import { ProductsView } from "../views/product-list.view.js";

export class ProductsController {
  constructor() {
    this.productsModel = new ProductsModel();
    this.productsView = new ProductsView();
  }

  async initProducts() {
    const products = await this.productsModel.getProducts();
    this.productsView.renderProducts(products);

    this.editProducts();

    return products;
  }

  editProducts() {
    const buttons = document.querySelectorAll(".shop-item-edit");
    buttons.forEach((button) =>
      button.addEventListener("click", (e) => console.log(e.target))
    );
  }
}
