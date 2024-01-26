import {cart , deleteCart} from "./calculate.js";

import { data } from "./data.js";



let cartSummeryHTML = '';

cart.forEach( (cartItem)=>{
    const productId = cartItem.productId;
    console.log(productId);
    let matchingProduct ;
    console.log(matchingProduct);
    data.forEach((product)=>{
        if(product.id === productId){
            matchingProduct = product;
        }
    });
    console.log(matchingProduct);
cartSummeryHTML +=`


<div id="js-cart-order-summary" class="order-summary js-cart-order-summary">
<div class="cart-item-container js-cart-item-container-${productId}">
  

  <div class="cart-item-details-grid">
    <img class="product-image"
      src="${matchingProduct.image}">

    <div class="cart-item-details">
      <div class="product-name">
        ${matchingProduct.name}
      </div>
      <div class="product-price">
      ₹ ${matchingProduct.price}
      </div>
      <div class="product-quantity">
        <span>
         <span class="qty">Quantity:</span>  <span class="quantity-label">${cartItem.quantity}</span>
        </span>
        <button class="delete-quantity-link link-primary js-delete-link" data-product-delete ="${matchingProduct.id}">Remove from the Cart</button>
        
      </div>
    </div>

    
  </div>
</div>
</div>

`
});



document.getElementById('js-cart-order-summary').innerHTML = cartSummeryHTML;


document.querySelectorAll('.js-delete-link')
.forEach((link) =>{
  link.addEventListener('click' , ()=>{
  const productDelete = link.dataset.productDelete; 
  deleteCart(productDelete);  
  console.log(cart); 


    const deleteFromCart = document.querySelector(`.js-cart-item-container-${productDelete}`);
 deleteFromCart.remove();
  });
  
});



