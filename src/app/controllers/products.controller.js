// @ts-nocheck
import { ProductsModel } from "../models/products.model.js";
import { ProductsView } from "../views/product-list.view.js";

export class ProductsController {
  constructor(appService) {
    this.appService = appService;
    this.productsModel = new ProductsModel();
    this.productsView = new ProductsView();
  }

  async initProducts() {
    const products = await this.productsModel.getProducts();
    this.productsView.renderProducts(products);
    return products;
  }

  editProduct(id) {
    const item = {
      ...this.appService.products.find((product) => product.id === id),
    };
    this.productsView.displayProductValues(item);
    this.changeProduct();
  }

  async changeProduct() {
    const showNewProduct = async (product) => {
      await this.productsModel.changeProduct(product);
    };
    this.productsView.changeProductValuesEvent(showNewProduct);
  }
  addNewProduct() {
   const product= this.productsView.addNewProductValues();
   this.productsModel.setNewProduct(product)
  }
}
