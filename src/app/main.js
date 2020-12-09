import {ProductsController} from "./controllers/products.controller.js";
import appService from "./services/app.service.js";
import {BasketController} from "./controllers/basket.controller.js";
import {ButtonsController} from "./controllers/buttons.controller.js";

class Main {
  async init() {
    const products = await new ProductsController().initProducts();
    const basketController = new BasketController(appService);
    const buttonsController = new ButtonsController(appService);
    appService.register(basketController, buttonsController, products);
  }
}
new Main().init();
