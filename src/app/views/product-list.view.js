// @ts-nocheck
export class ProductsView {
  constructor() {
    this.titleInput = document.getElementById("editProductTitle");
    this.priceInput = document.getElementById("editProductPrice");
    this.imageInput = document.getElementById("editProductImage");
    this.newTitleInput = document.getElementById("addProductTitle");
    this.newPriceInput = document.getElementById("addProductPrice");
    this.newImageInput = document.getElementById("addProductImage");
  }

  renderProducts = (products) => {
    products.forEach((product) => {
      const { title, image, price, id } = product;
      const items = document.querySelector(".shop-items");
      items.insertAdjacentHTML(
        "beforeend",
        this.renderProduct(title, image, price, id)
      );
    });
  };

  renderProduct = (title, image, price, id) => {
    const markup = `
          <div class="shop-item">
            <span class="shop-item-title">${title}</span>
            <button data-id="${id}" class="btn shop-item-edit">edit product</button>
            <img class="shop-item-image" src="${image}">
            <div class="shop-item-details">
            <span class="shop-item-price">$${price}</span>
            <button data-id="${id}" class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
          </div>`;
    return markup;
  };

  displayProductValues(product) {
    this.titleInput.value = product.title;
    this.priceInput.value = product.price;
    this.imageInput.value = product.image;
    this.ProductId = product.id;
  }

  changeProductValuesEvent(callback) {
    const button = document.querySelector(".edit-product-button");
    if (this.titleInpu.valuet === "" && this.priceInput.value === "") {
      return;
    } else
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const updatedProduct = {
          title: this.titleInput.value,
          price: this.priceInput.value,
          image: this.imageInput.value,
          id: this.ProductId,
        };

        callback(updatedProduct);
        this.clearInputs();
      });
  }

  addNewProductValues() {
    if (this.newTitleInput.value === "" && this.newPriceInput.value === "") {
      alert("please fill all fields");
      return;
    } else {
      const newProduct = {
        title: this.newTitleInput.value,
        price: this.newPriceInput.value,
        image: this.newImageInput.value,
        id: Math.random().toString(36).substr(2, 9),
      };
      this.clearInputs();
      return newProduct;
    }
  }

  clearInputs() {
    this.titleInput.value = "";
    this.priceInput.value = "";
    this.imageInput.value = "";
    this.newTitleInput.value = "";
    this.newPriceInput.value = "";
    this.newImageInput.value = "";
  }
}
