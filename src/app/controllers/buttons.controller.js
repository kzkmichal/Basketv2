import { ButtonsView } from "../views/button.views.js";

export class ButtonsController {
  constructor(appService) {
    this.appService = appService;
    this.buttonsView = new ButtonsView();
    this.buttonsView.clickEvent(this.addToBasketHandler);
    this.buttonsView.removeEvent(this.removeItemHandler);
    this.buttonsView.editItemClickEvent(this.editItemHandler);
    this.buttonsView.addNewProductEvent(this.addItemHandler);
  }

  addToBasketHandler = (id) => this.appService.createItem(id);

  removeItemHandler = () => {
    this.appService.removeAll();
  };

  removeEvent() {
    this.buttonsView.removeEvent();
  }

  renderItemButtons(id) {
    this.buttonsView.renderItemButtons(id);
  }

  editItemHandler = (id) => this.appService.editProduct(id);

  addItemHandler = () => this.appService.addNewProduct();
}
