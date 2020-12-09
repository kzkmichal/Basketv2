import { ButtonsView } from "../views/button.views.js";

export class ButtonsController {
  constructor(appService) {
    this.appService = appService;
    this.buttonsView = new ButtonsView();
    this.buttonsView.clickEvent(this.addToBasketHandler);
    this.buttonsView.removeEvent(this.removeItemHandler);
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
  editItemButton(id) {
    this.buttonsView.editItemButton(id);
  }
}
