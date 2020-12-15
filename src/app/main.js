// @ts-nocheck
import { ProductsController } from "./controllers/products.controller.js";
import appService from "./services/app.service.js";
import { BasketController } from "./controllers/basket.controller.js";
import { ButtonsController } from "./controllers/buttons.controller.js";

class Main {
  async init() {
    const productsController = new ProductsController(appService);
    const products = await productsController.initProducts();
    const basketController = new BasketController(appService);
    const buttonsController = new ButtonsController(appService);
    appService.register(
      basketController,
      buttonsController,
      products,
      productsController
    );
  }
}
new Main().init();
