export class AppService {

    register(basketController, buttonsController, products) {
        this.products = products;
        this.basketController = basketController;
        this.buttonsController = buttonsController;
    }

    createItem(id) {
        this.basketController.createItem(id);
    }

    removeAll() {
        this.basketController.removeAll();
    }

    renderItemButtons(id) {
        this.buttonsController.renderItemButtons(id);
    }

    removeEvent(){
        this.buttonsController.removeEvent()
    }
}
const appService = new AppService();
export default appService;
