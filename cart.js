import { data } from "./data.js";
import { cart , updatingCart } from "./calculate.js";
import { popdata } from "./data.js";


let prodcutData = '';
data.forEach((data) => {
prodcutData += `
<div class="box">
<div class="image">
    <img src="${data.image}" alt="">
    <a  class="fas fa-heart"></a>
</div>

 <div class="content">
     
     <h3>${data.name}</h3>
     <button onclick="showToast()" class="btn add-to-cart-button button-primary js-add-to-cart"  data-product-Id="${popdata.id}">
     Add to Cart
 </button>
    
    <span class="price"> ₹ ${data.price} /-</span>
 </div>   
 </div>
          
`

});

document.getElementById('js-box-container').innerHTML = prodcutData;



function keepAddQty (){
    let cartQuantity = 0;
    cart.forEach((items)=>{
        cartQuantity += items.quantity;
    
    })
    document.getElementById('js-cart-qty').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')        
.forEach((button)=>{
button.addEventListener('click' , () => {
    
    const  productId = button.dataset.productId;
    updatingCart(productId);
    keepAddQty();
});

/*document.querySelectorAll(".js-add-to-cart").forEach((button)=>{

button.addEventListener('click' , ()=>{

})
function added(){
let image = document.querySelectorAll(".added-to-cart");
image.style.opacity = 5;
}
});*/

});

