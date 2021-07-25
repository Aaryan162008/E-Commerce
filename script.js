function removebtn() {
    var removebutton = document.getElementsByClassName("removeitems") 
    for(var i = 0;i < removebutton.length;i++){
        var singlebtn= removebutton[i];
        singlebtn.addEventListener("click" ,(e)=>{
            var targetBtn = e.target;
            targetBtn.parentElement.parentElement.remove();
            updatePrice()
        })
    }
}
removebtn();

function updatePrice() {
    var total = 0;
    var cartQuantity = document.getElementsByClassName('cartquantity');
    var cartPrice = document.getElementsByClassName('cartprice');
    for (var i = 0; i<cartPrice.length;i++){
        var singlePrices = cartPrice[i].innerText.replace("Rs ", "");
        singlePrices = parseInt (singlePrices.replace(",",""));
        var singlequantity = cartQuantity[i].value;
        
        total = total+singlePrices*singlequantity;
    }
    document.querySelector(".totalprice").innerHTML="Total: Rs " + total;
}
updatePrice()
var quantity = document .getElementsByClassName("cartquantity")
for(var i=0;i<quantity.length;i++){
    var quant = quantity[i];
    quant.addEventListener("change",(e)=>{
        updatePrice()
    })
}

function productinfo() {
    var buttonbasket = document.getElementsByClassName("basketadd");
    for(i= 0; i<buttonbasket.length; i++) {
        var buttonbasketsingle = buttonbasket[i];
        buttonbasketsingle.addEventListener('click', (e)=>{
            var butn = e.target;
            var productCode = butn.parentElement.parentElement;
            var productName = productCode.getElementsByClassName("productName")[0].innerText
            var productPrice = productCode.getElementsByClassName("blalalalala")[0].innerText.replace("Price: ", "");
            console.log(productName +" | " + productPrice);
        addtobasket(productName, productPrice)
        updatePrice();
        })
    }
}

productinfo()
function addtobasket(name,Price) {
    var newProduct = document.createElement('tr');
    var productDetails = `<td><h4 class = "CartProd"> ${name}</h4></td>
                            <td><input type = "number" class="cartquantity" min="1" value="1" id="numberinput"></td>
                            <td><h4 class="cartprice blalalalala">${Price}</h4></td>
                        <td><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded removeitems">Remove</button></td>`
 
    newProduct.innerHTML = productDetails;
    var cartTable = document.getElementsByClassName("table-cart")[0];
    var cartproductName = cartTable.getElementsByClassName("CartProd");
    console.log(cartproductName)
 
    for(var i=0; i<cartproductName.length; i++){
        if(cartproductName[i].innerText == name){
            console.log("matched")
            alert("the product is already added in the cart")
            return;
        }
 
    }
    cartTable.append(newProduct)
 
 
 
    var removebutton = document.getElementsByClassName("removeitems");
    for(var i = 0; i<removebutton.length; i++) {
        var singlebtn = removebutton[i];
        singlebtn.addEventListener("click", (e)=>{
            var targetBtn = e.target;
            targetBtn.parentElement.parentElement.remove();
            updatePrice()
        })
    }
    var cartQuantity = document.getElementsByClassName("cart-quantity");
    for(var i=0;i<cartQuantity.length;i++){
        var Singleinput = cartQuantity[i];
        Singleinput.addEventListener("change", (e)=>{
            updatePrice()
        })
    }
 
}
