export let cart = JSON.parse(localStorage.getItem('cart'));



if(!cart){
   cart =  
   [
    {
        productId : "8c9c52b5-5a19-4bcb-a5d1-158a74287c53" , 
        quantity : 2 
    }
   ];
}


   function saveDataToStorage(){
       localStorage.setItem('cart' , JSON.stringify(cart));
   }

export function updatingCart (productId){
   let matchingItems;
       cart.forEach((item)=> {
           if (productId === item.productId){
               matchingItems = item;
           }
           
       });

       if(matchingItems){
           matchingItems.quantity += 1;
       }else{
           cart.push({productId : productId  , quantity : 1})
       }
       console.log(cart);
       saveDataToStorage()
    
}

 export function deleteCart (productId){
       const newArray = []; 
       cart.forEach((cartItem)=>{
           if(cartItem.productId !== productId){
               newArray.push(cartItem);
           }
       });
       cart = newArray;
       saveDataToStorage()
 };
