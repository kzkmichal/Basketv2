export class AppService {
  register(basketController, buttonsController, products, productsController) {
    this.products = products;
    this.basketController = basketController;
    this.buttonsController = buttonsController;
    this.productsController = productsController;
  }

  createItem(id) {
    this.basketController.createItem(id);
  }
  editProduct(id) {
    this.productsController.editProduct(id);
  }
  addNewProduct() {
    this.productsController.addNewProduct();
  }

  removeAll() {
    this.basketController.removeAll();
  }

  renderItemButtons(id) {
    this.buttonsController.renderItemButtons(id);
  }

  removeEvent() {
    this.buttonsController.removeEvent();
  }
}
const appService = new AppService();
export default appService;
