// cart constants from prev hws
const glazingPrices = {
	"Keep original" : 0.0,
	"Sugar milk" : 0.0,
	"Vanilla milk" : 0.50,
	"Double chocolate" : 1.50
};

const packPrices = {
	"1" : 1, "3" : 3, "6" : 5, "12" : 10
};

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.calculatedPrice = (this.basePrice + glazingPrices[this.glazing]) * packPrices[this.size];
    }
}

let rollIndexes = 0; // use these to #nayeon'spop rolls off !

function populateInitCart() {
    const cartData = JSON.parse(localStorage.getItem("newCart"));
	//console.log(cartData); //quick checks!
    if (cartData.length == 0) {
        const shoppingCart = [];
    } else {
        for (var i = 0; i < cartData.length; i++){
            (addNewRoll(cartData[i]));

        }
        //shoppingCart.forEach(addNewRoll);
    }

}

//takes a roll && adds it to the page!
function addNewRoll(roll) {
    const newRollImg = "images/products/" + rolls[roll.type]["imageFile"];
    const newRollName = roll.type;
    const newRollGlz = roll.glazing;
    const newRollSz = roll.size;
    // ` <-- works for this ?? need find why !!

    const newRollHtml = `
    <div class="cart-item" id="item-${rollIndexes}">
        <div>
            <img class="product-image" src="${newRollImg}">
            <p class="remove">Remove</p>
        </div>
        <div class="item-detail">
            <p>${newRollName} Cinnamon Roll</p>
            <p>Glazing: ${newRollGlz}</p>
            <p>Pack Size: ${newRollSz}</p>
        </div>
        <div class="item-price">
            <p>$ 2.49</p>
        </div>
    </div>
    `;

    const bunTemplate = document.createElement("template"); // make a template for cart items!
    bunTemplate.innerHTML = newRollHtml;
    const cartItem = bunTemplate.content; 


    const cartWrapper = document.querySelector(".cart-wrapper");

    
    let currentRoll = rollIndexes;
    cartItem.querySelector(".remove").onclick = function() {
        var selection="#item-" + currentRoll.toString();
        console.log(currentRoll);
        console.log("bye bye!");
        //console.log(cartWrapper.querySelector(selection));
        cartWrapper.querySelector(selection).remove();
        updateCartPrice();
    }

    cartWrapper.appendChild(cartItem);
    rollIndexes ++;
}


//revamped function from prev hw -- use this now to update items from this page!
function updateCartPrice() {
    let price = 0;
    //cart.forEach(addPrice(price));
    //shoppingCart.forEach(roll => totalPrice += roll.calculatedPrice);
    const priceElem = document.querySelector(".total-price");
    priceElem.textContent = "$" + price.toFixed(2);
}

function updateBadge(){
    const cartData = JSON.parse(localStorage.getItem("newCart"));
    console.log(cartData.length)
    let cartLength = cartData.length;
    const badgeElem = document.querySelector("#cart-badge");
    badgeElem.textContent = cartLength;
}

updateBadge();

function updateCartPage() {
    populateInitCart();
    updateBadge();
    //shoppingCart.forEach(addNewRoll);
    //updateCartPrice();
}
