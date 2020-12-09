 // @ts-nocheck
 export class Calculations {
   static view(total) {
     const totalPrice = document.querySelector('.cart-total-price')
     if (total) {
       totalPrice.innerText = `$${total.toFixed(2)}`
     } else {
       totalPrice.innerText = `$0`
     }
   }
 }
