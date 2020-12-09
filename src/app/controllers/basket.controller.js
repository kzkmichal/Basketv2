import instanceBasket from "../models/basket.model.js";
import { Calculations } from "../utils/calculations.js";
import {
  addChangeQuantityEvent,
  addRemoveEvent,
  renderItems,
} from "../views/basket.view.js";

export class BasketController {
  constructor(appService) {
    this.appService = appService;
  }

  createItem(id) {
    const item = {
      ...this.appService.products.find((e) => e.id === id),
      amount: 1,
    };
    instanceBasket.add(item);
    this.showItems();
  }

  removeItem(id) {
    const item = this.appService.products.find((e) => e.id === id);
    instanceBasket.remove(item);
    this.showItems();

    // this.buttonsView.renderItemButtons(id)
    this.appService.renderItemButtons(id);
    Calculations.view(instanceBasket.getSum());
  }

  showItems() {
    const items = instanceBasket.getItems();
    renderItems(items);
    instanceBasket.getSum();
    Calculations.view(instanceBasket.getSum());
    const removeBasketItemHandler = (id) => {
      this.removeItem(id);
    };
    const changeItemQuantityHandler = (id, value) => {
      this.manageItemQuantity(id, value);
    };
    addRemoveEvent(removeBasketItemHandler);
    addChangeQuantityEvent(changeItemQuantityHandler);
  }

  removeAllItems() {
    // this.buttonsView.removeEvent();
    this.appService.removeEvent();
    instanceBasket.removeAll();
    Calculations.view(instanceBasket.getSum());
  }

  removeAll() {
    this.cart = document.querySelector(".cart-items");
    this.cart.innerHTML = "";
    instanceBasket.removeAll();
    Calculations.view(instanceBasket.getSum());
  }

  manageItemQuantity(id, value) {
    instanceBasket.getQuantity(id, value);
    this.showItems();
  }
}
